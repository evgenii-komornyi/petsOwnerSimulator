import React from 'react';
import { View } from 'react-native';

import { SettingsTitle } from '../settings-title.component';
import { Alarm } from './alarm.component';

import useOwnerStore from '../../../../app/useOwnerStore';

import { styles } from './time-picker.styles';

export const TimePicker = ({ isDisabled }) => {
    const { settings } = useOwnerStore(state => state);

    return (
        <View
            style={styles.settingsContainer}
            pointerEvents={isDisabled ? 'none' : 'auto'}
        >
            <SettingsTitle title="Notifications Schedule" />
            {settings.alarms.map((alarm, index) => (
                <View styles={styles.alarmContainer} key={index}>
                    <Alarm alarm={alarm} />
                </View>
            ))}
        </View>
    );
};
