import React from 'react';
import { View, Pressable, Animated } from 'react-native';

import { useToggleActions } from '../../hooks/logic/useToggleActions.hook';

import { PetCard } from './pet-card.component';
import { Statistic } from '../statistic/statistic.component';
import { Actions } from '../actions/actions.component';

import { checkStatsToReturnCorrectImage } from '../../helpers/petsManipulations.helper';

import { styles } from './pets.styles';
import { styles as globalStyles } from '../../styles/global.styles';

export const Pet = ({
    item: { id, name, img, stats, statsIncreasing },
    touchStart,
    touchEnd,
}) => {
    const [isVisible, toggleVisibility, animatedHeight] = useToggleActions();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.petContainer}>
                <PetCard
                    img={checkStatsToReturnCorrectImage(stats, img)}
                    name={name}
                    id={id}
                    stats={stats}
                    moodIncreasing={statsIncreasing.mood}
                    touchStart={touchStart}
                    touchEnd={touchEnd}
                />
                <Pressable
                    style={({ pressed }) => [
                        globalStyles.container,
                        pressed && styles.pressedStats,
                    ]}
                    onLongPress={toggleVisibility}
                >
                    <Statistic stats={stats} />
                </Pressable>
            </View>
            <View style={{ overflow: 'hidden' }}>
                <Animated.View
                    style={[
                        styles.actionsContainer,
                        { height: animatedHeight },
                    ]}
                >
                    {isVisible && (
                        <View
                            style={{
                                paddingVertical: 10,
                                width: 380,
                                height: 130,
                            }}
                        >
                            <Actions
                                id={id}
                                currentFoodLevel={stats.hunger}
                                currentDigestionLevel={stats.digestion}
                            />
                        </View>
                    )}
                </Animated.View>
            </View>
        </View>
    );
};
