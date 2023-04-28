import React from 'react';
import { View } from 'react-native';

import { Farewell } from '../farewell/farewell.component';
import { Level } from './level.component';

import { icons } from '../../data/icons';

import { styles } from './statistic.styles';

export const Statistic = ({ id, name, stats }) => {
    const checkIconByLevel = levelName =>
        icons[levelName][stats[levelName] > 30 ? 'full' : 'empty'];

    return (
        <View style={styles.mainContainer}>
            {stats.health === 0 && <Farewell name={name} id={id} />}
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
