import React from 'react';
import { View } from 'react-native';

import { icons } from '../../data/icons';
import { Level } from './level.component';

import { styles } from './statistic.styles';
import { CustomText } from '../custom-text/custom-text.component';

export const Statistic = ({ stats }) => {
    const checkIconByLevel = levelName =>
        icons[levelName][stats[levelName] > 30 ? 'full' : 'empty'];

    return (
        <View style={styles.mainContainer}>
            {stats.health === 0 && (
                <View style={styles.deadContainer}>
                    <CustomText
                        text="Your pet has been taken to the shelter."
                        style={styles.deadText}
                    />
                </View>
            )}
            {stats.hasOwnProperty('health') && (
                <Level
                    iconStyle={styles.iconLevel.health}
                    iconSource={checkIconByLevel('health')}
                    statLevel={stats.health}
                    additionalStyle={{
                        borderTopRightRadius: 10,
                    }}
                />
            )}
            {stats.hasOwnProperty('hunger') && (
                <Level
                    iconStyle={styles.iconLevel.hunger}
                    iconSource={checkIconByLevel('hunger')}
                    statLevel={stats.hunger}
                />
            )}
            {stats.hasOwnProperty('mood') && (
                <Level
                    iconStyle={styles.iconLevel.mood}
                    iconSource={checkIconByLevel('mood')}
                    statLevel={stats.mood}
                    additionalStyle={{ borderBottomRightRadius: 10 }}
                />
            )}
        </View>
    );
};
