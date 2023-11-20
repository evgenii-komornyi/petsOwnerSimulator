import React, { useCallback, useState } from 'react';
import { View, Pressable } from 'react-native';

import { SettingsTitle } from '../settings-title.component';
import { NotificationInput } from './notification-input.component';
import { CustomText } from '../../../custom-text/custom-text.component';

import useOwnerStore from '../../../../app/useOwnerStore';

import { styles } from './notification.styles';

export const Notification = ({ isDisabled }) => {
    const {
        settings: {
            feedingNotification: { title, body },
        },
        saveNotification,
    } = useOwnerStore(state => state);

    const [notification, setNotification] = useState({ title, body });

    const handleChange = useCallback(
        (name, value) => {
            setNotification({ ...notification, [name]: value });
        },
        [notification.title, notification.body]
    );

    const handleSave = () => {
        saveNotification(notification);
    };

    const handleDiscardChanges = () => {
        setNotification({ title, body });
    };

    return (
        <View
            style={styles.settingsContainer}
            pointerEvents={isDisabled ? 'none' : 'auto'}
        >
            <SettingsTitle title="Notifications Content" />
            <View style={styles.inputsContainer}>
                <NotificationInput
                    value={notification.title}
                    maxAvailableLength={60}
                    fieldDescription="title"
                    onChange={handleChange}
                />
                <NotificationInput
                    value={notification.body}
                    maxAvailableLength={120}
                    fieldDescription="body"
                    onChange={handleChange}
                />
            </View>
            <View style={styles.controlButtonsContainer}>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: `rgba(0, 0, 0, ${
                                pressed ? '.5' : '1'
                            })`,
                        },
                        styles.buttonContainer,
                    ]}
                    onPress={handleSave}
                >
                    <CustomText text="Save" style={styles.saveButtonText} />
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.buttonContainer,
                        {
                            marginLeft: 5,
                            backgroundColor: `rgba(0, 0, 0, ${
                                pressed ? '.4' : '0'
                            })`,
                        },
                    ]}
                    onPress={handleDiscardChanges}
                >
                    <CustomText
                        text="Discard"
                        style={styles.discardButtonText}
                    />
                </Pressable>
            </View>
        </View>
    );
};
