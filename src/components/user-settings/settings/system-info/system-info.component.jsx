import React from 'react';
import { View } from 'react-native';

import { ImportantWarning } from './important-warning.component';

import { styles } from './system-info.styles';

export const SystemInfo = () => {
    return (
        <View style={styles.settingsContainer}>
            <ImportantWarning />
        </View>
    );
};
