import React from 'react';
import { View } from 'react-native';

import { icons } from '../../helpers/icons';
import { Level } from './level.component';

import { styles } from './statistic.styles';

export const Statistic = ({ stats }) => {
    const checkIconByLevel = levelName =>
        icons[levelName][stats[levelName] > 30 ? 'full' : 'empty'];

    return (
        <View style={styles.mainContainer}>
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    backgroundColor: 'black',
                    width: '100%',
                    display: 'none',
                    height: 200,
                    zIndex: 2,
                }}
            />
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

// https://snack.expo.dev/@yoobidev/draggable-component?platform=android
