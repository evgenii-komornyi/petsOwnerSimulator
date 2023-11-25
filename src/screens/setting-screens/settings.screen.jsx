import React from 'react';
import { View } from 'react-native';

import { useOnBackPress } from '../../hooks/common/useOnBackPress.hook';
import { Settings } from '../../components/user-settings/settings/settings.component';

import { styles } from '../../styles/global.styles';

export const SettingsScreen = () => {
    useOnBackPress();

    return (
        <View style={styles.container}>
            <Settings />
        </View>
    );
};
