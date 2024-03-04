import React from 'react';
import { View } from 'react-native';

import { CustomText } from '../custom-text/custom-text.component';

import { styles } from './settings/settings.styles';

export const SettingsTitle = ({ title }) => {
    return (
        <View style={styles.settingsTitleContainer}>
            <CustomText text={title} style={styles.settingsTitle} />
        </View>
    );
};
