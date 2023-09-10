import React from 'react';
import { Image, View } from 'react-native';
import { LinearProgress } from '@rneui/themed';

import { styles } from './statistic.styles';

export const Level = ({
    iconSource,
    statLevel,
    maxLevel,
    iconStyle,
    additionalStyle = {},
}) => {
    return (
        <View style={[styles.statContainer, additionalStyle]}>
            <View style={iconStyle.container}>
                <Image style={iconStyle.icon} source={iconSource} />
            </View>
            <View style={styles.barContainer}>
                <LinearProgress
                    value={statLevel / maxLevel}
                    style={styles.bar}
                    color={`${
                        statLevel > 30 ? 'rgba(0, 200, 0, 1)' : 'rgb(255, 0, 0)'
                    }`}
                    variant="determinate"
                    animation={false}
                />
            </View>
        </View>
    );
};
