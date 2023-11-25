import React from 'react';
import { Linking, BackHandler, View } from 'react-native';
import { useSystemInfo } from '../../../../hooks/logic/settings/useSystemInfo.hook';

import { CustomText } from '../../../custom-text/custom-text.component';
import { Button } from '@rneui/themed';

import { warnings } from '../../../../data/warnings';
import { Dictionary } from '../../../../constants/dictionary';

import { styles } from './warning.styles';

export const Warning = ({ warningType }) => {
    const {
        isCorrectDevice,
        isWithoutWarningDevice,
        systemInfo: { manufacturer },
    } = useSystemInfo();

    const toSettings = async () => {
        await Linking.openSettings();
        BackHandler.exitApp();
    };

    return (
        <View style={styles.warningContainer}>
            {warningType === 'osReboot' && isWithoutWarningDevice ? (
                <CustomText text={Dictionary['en'].NO_WARNINGS} />
            ) : (
                <>
                    <CustomText
                        text={warnings[warningType].text}
                        style={styles.warningText}
                    />
                    {warningType === 'osReboot' &&
                        (isCorrectDevice ? (
                            <CustomText
                                text={warnings['osReboot'].device[manufacturer]}
                            />
                        ) : (
                            <CustomText
                                text={warnings['osReboot']?.device?.otherwise}
                            />
                        ))}
                    {warnings[warningType].hasButton ? (
                        <Button
                            title="Settings"
                            color="#000"
                            containerStyle={styles.warningButton}
                            onPress={toSettings}
                        />
                    ) : null}
                </>
            )}
        </View>
    );
};
