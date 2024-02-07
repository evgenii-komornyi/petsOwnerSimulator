import React from 'react';
import { Image, View } from 'react-native';
import { LinearProgress } from '@rneui/themed';

import { CustomText } from '../custom-text/custom-text.component';

import { styles } from './statistic.styles';

export const Level = ({
    iconSource,
    statLevel,
    maxLevel,
    iconStyle,
    additionalStyle = {},
}) => {
    const currentLevel = statLevel / maxLevel;

    return (
        <View style={[styles.statContainer, additionalStyle]}>
            <View style={iconStyle.container}>
                <Image style={iconStyle.icon} source={iconSource} />
            </View>
            <View style={styles.barContainer}>
                <LinearProgress
                    value={currentLevel}
                    style={styles.bar}
                    color={`${
                        currentLevel * 0.3
                            ? 'rgba(0, 200, 0, 1)'
                            : 'rgb(255, 0, 0)'
                    }`}
                    variant="determinate"
                    animation={false}
                />
                <View style={styles.labelContainer}>
                    <CustomText
                        text={statLevel.toFixed(0)}
                        style={styles.label}
                    />
                </View>
            </View>
        </View>
    );
};
