import React from 'react';
import { Linking, BackHandler, View } from 'react-native';
import { CustomText } from '../../../custom-text/custom-text.component';
import { Button } from '@rneui/themed';

import { styles } from './warning.styles';

const warnings = {
    permissions: {
        text: 'If you want receive notifications, you need to allow it in settings. And then restart application.',
        hasButton: true,
    },
    osReboot: {
        text: 'For the correct alarm work after rebooting system, some devices like Huawei or Xiaomi require to disable automatic management. The way to get to this settings: ',
        huaweiPath:
            'Huawei: Power usage details -> Launch settings -> Disable Manage automatically option and be sure that Auto-launch option is enabled.',
        xiaomiPath: 'Xiaomi: Battery saver -> Enable No restrict option.',
        hasButton: true,
    },
};

export const Warning = ({ warningType }) => {
    const toSettings = async () => {
        await Linking.openSettings();
        BackHandler.exitApp();
    };

    return (
        <View style={styles.warningContainer}>
            <CustomText
                text={warnings[warningType].text}
                style={styles.warningText}
            />
            {warnings[warningType].huaweiPath && (
                <CustomText text={warnings[warningType].huaweiPath} />
            )}
            {warnings[warningType].xiaomiPath && (
                <CustomText text={warnings[warningType].xiaomiPath} />
            )}
            {warnings[warningType].hasButton ? (
                <Button
                    title="Settings"
                    color="#000"
                    containerStyle={styles.warningButton}
                    onPress={toSettings}
                />
            ) : null}
        </View>
    );
};
