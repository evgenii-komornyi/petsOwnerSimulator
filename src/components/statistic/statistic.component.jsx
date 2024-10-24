import React from 'react';
import { View } from 'react-native';

import { Farewell } from '../farewell/farewell.component';
import { Level } from './level.component';

import { icons } from '../../data/icons';

import { styles } from './statistic.styles';
import { EffectBar } from './effect-bar.component';

export const Statistic = ({ id, name, stats, maxValues }) => {
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
                    maxLevel={maxValues.health}
                    additionalStyle={{
                        borderTopRightRadius: 10,
                    }}
                />
            )}
            {stats.hasOwnProperty('satiety') && (
                <Level
                    iconStyle={styles.iconLevel.satiety}
                    iconSource={checkIconByLevel('satiety')}
                    statLevel={stats.satiety}
                    maxLevel={maxValues.satiety}
                />
            )}
            {stats.hasOwnProperty('mood') && (
                <Level
                    iconStyle={styles.iconLevel.mood}
                    iconSource={checkIconByLevel('mood')}
                    statLevel={stats.mood}
                    maxLevel={maxValues.mood}
                    additionalStyle={{ borderBottomRightRadius: 10 }}
                />
            )}

            <EffectBar stats={stats} />
        </View>
    );
};
