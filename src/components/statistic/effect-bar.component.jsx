import React from 'react';
import { View } from 'react-native';

import { IconEffect } from './icon-effect.component';

import { styles } from './statistic.styles';
import { icons } from '../../data/icons';

export const EffectBar = ({ stats }) => {
    return (
        <View style={styles.effectBarContainer}>
            {stats.hasOwnProperty('hydration') && stats.hydration <= 0 && (
                <IconEffect icon={icons.hydration.noHydro} />
            )}
        </View>
    );
};
