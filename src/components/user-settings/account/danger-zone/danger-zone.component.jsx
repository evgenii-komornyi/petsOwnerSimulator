import React from 'react';
import { Pressable, View } from 'react-native';
import { CustomText } from '../../../custom-text/custom-text.component';
import { SettingsTitle } from '../../settings-title.component';

import { useAlert } from '../../../../hooks/common/useAlert.hook';

import { styles } from '../account.styles';
import useOwnerStore from '../../../../app/useOwnerStore';
import useSettingsStore from '../../../../app/useSettingsStore';
import useFreeSlotPropsStore from '../../../../app/useFreeSlotPropsStore';

export const DangerZone = () => {
    const callAlert = useAlert();
    const { resetGame, loadGame } = useOwnerStore(state => state);
    const { clearSettings } = useSettingsStore(state => state);
    const { resetAvailablePlaces } = useFreeSlotPropsStore(state => state);

    const reset = () => {
        resetGame();
        resetAvailablePlaces();
    };

    const clearData = () => {
        callAlert(
            'Important',
            'Your owner data will return to default. Continue?',
            [
                {
                    text: 'YES',
                    onPress: reset,
                    style: 'default',
                },
                {
                    text: 'NO',
                    onPress: () => null,
                    style: 'cancel',
                },
            ]
        );

        setTimeout(() => {
            loadGame();
        }, 2000);
    };

    const clearStorage = () => {
        clearSettings();
    };

    return (
        <View style={styles.dangerZoneContainer}>
            <SettingsTitle title="Danger zone" />
            <View style={styles.dangerZoneButtonsContainer}>
                <Pressable
                    style={({ pressed }) => [
                        styles.buttonContainer,
                        {
                            backgroundColor: `rgba(255, 0, 0, ${
                                pressed ? '.4' : '0'
                            })`,
                        },
                    ]}
                    onPress={clearData}
                >
                    <CustomText
                        text="Clear data"
                        style={styles.clearDataButtonText}
                    />
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        styles.buttonContainer,
                        {
                            backgroundColor: `rgba(255, 0, 0, ${
                                pressed ? '.4' : '0'
                            })`,
                        },
                    ]}
                    onPress={clearStorage}
                >
                    <CustomText
                        text="Clear Settings"
                        style={styles.clearDataButtonText}
                    />
                </Pressable>
            </View>
        </View>
    );
};
