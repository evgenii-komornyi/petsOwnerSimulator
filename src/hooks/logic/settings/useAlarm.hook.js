import { useState } from 'react';
import useOwnerStore from '../../../app/useOwnerStore';
import useSettingsStore from '../../../app/useSettingsStore';
import { useCreateRef } from '../../common/useCreateRef.hook';
import { useToast } from '../../common/useToast.hook';

export const useAlarm = alarm => {
    const { activateAlarm, deactivateAlarm } = useSettingsStore(state => state);
    const { changeAlarmActivity, changeAlarmTime } = useOwnerStore(
        state => state
    );
    const [isActive, setIsActive] = useState(alarm.isAlarmActive);
    const currentIsActive = useCreateRef(isActive);

    const toastCaller = useToast();

    const onSwitcherChange = () => {
        setIsActive(prev => !prev);

        setTimeout(() => {
            changeAlarmActivity(alarm.id, currentIsActive.current);
            if (currentIsActive.current) {
                activateAlarm(alarm.id, alarm.hour, alarm.minutes);
            } else {
                deactivateAlarm(alarm.id);
            }

            if (!alarm.isAlarmActive) {
                toastCaller('You activated alarm successfully!');
            } else {
                toastCaller('You deactivated alarm successfully!');
            }
        }, 100);
    };

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (_, selectedDate) => {
        setShow(false);
        const hours = selectedDate.getHours();
        const minutes = selectedDate.getMinutes();
        changeAlarmTime(alarm.id, hours, minutes);

        if (alarm.isAlarmActive) {
            activateAlarm(alarm.id, hours, minutes);
        }
    };

    const showTimepicker = () => {
        const date = new Date();
        date.setHours(alarm.hour);
        date.setMinutes(alarm.minutes);
        setDate(date);
        setShow(true);
    };

    return {
        date,
        show,
        currentIsActive,
        onSwitcherChange,
        onChange,
        showTimepicker,
    };
};
