import React from 'react';

import { View, Pressable, Dimensions } from 'react-native';
import { Switch } from '@rneui/themed';

import { CustomText } from '../../../custom-text/custom-text.component';
import { Icon } from '../../../icon/icon.component';

import DateTimePicker from '@react-native-community/datetimepicker';

import { useAlarm } from '../../../../hooks/logic/settings/useAlarm.hook';

import { Constants } from '../../../../constants/constants';

import { styles } from './time-picker.styles';

export const Alarm = ({ alarm }) => {
    const {
        date,
        currentIsActive,
        show,
        onSwitcherChange,
        onChange,
        showTimepicker,
    } = useAlarm(alarm);

    return (
        <>
            <View style={styles.alarmDetailsContainer}>
                <View style={styles.switcherContainer}>
                    <Switch
                        value={currentIsActive.current}
                        onValueChange={onSwitcherChange}
                        color="#000000"
                    />
                </View>
                <View style={styles.timeContainer}>
                    <CustomText
                        text="Notification set to "
                        style={styles.notificationText}
                    />
                    <Pressable
                        onPress={showTimepicker}
                        style={styles.timeButtonContainer}
                    >
                        <CustomText
                            text={`${
                                alarm.hour.toString().length === 1 ? '0' : ''
                            }${alarm.hour}:${
                                alarm.minutes.toString().length === 1 ? '0' : ''
                            }${alarm.minutes}`}
                            style={styles.timeText}
                        />
                        <View style={styles.iconContainer}>
                            <Icon
                                type={Constants.MATERIALCOMMUNITYICONS_ICON}
                                icon="clock-edit-outline"
                                color="#bbb"
                                size={20}
                            />
                        </View>
                    </Pressable>
                </View>
            </View>
            {show ? (
                <DateTimePicker
                    value={date}
                    mode="time"
                    is24Hour={true}
                    onChange={onChange}
                />
            ) : null}
        </>
    );
};
