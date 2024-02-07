import React from 'react';
import { View } from 'react-native';
import { Image } from '@rneui/themed';

import { styles } from './statistic.styles';

export const IconEffect = ({ icon, style = {} }) => {
    return (
        <View style={[styles.iconEffectContainer, style]}>
            <View style={styles.iconEffectItem}>
                <Image source={icon} style={styles.icon} />
            </View>
        </View>
    );
};
