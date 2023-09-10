import React from 'react';
import { View, Pressable, Animated } from 'react-native';

import { useToggleActions } from '../../hooks/logic/pets/useToggleActions.hook';
import { usePet } from '../../hooks/logic/pets/usePet.hook';

import { PetCard } from './pet-card.component';
import { Statistic } from '../statistic/statistic.component';
import { Actions } from '../actions/actions.component';

import { styles } from './pets.styles';
import { styles as globalStyles } from '../../styles/global.styles';

export const Pet = ({
    item: { id, name, img, animation, stats, statsIncreasing, maxValues },
    touchStart,
    touchEnd,
}) => {
    const [isVisible, toggleVisibility, animatedHeight] = useToggleActions(
        stats.health
    );
    const { currentImg } = usePet(stats, img);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.petContainer}>
                <PetCard
                    img={currentImg}
                    animation={animation}
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
                        pressed && stats.health !== 0 && styles.pressedStats,
                    ]}
                    onPress={toggleVisibility}
                >
                    <Statistic
                        maxValues={maxValues}
                        stats={stats}
                        name={name}
                        id={id}
                    />
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
                                currentSatietyLevel={stats.satiety}
                                currentDigestionLevel={stats.digestion}
                            />
                        </View>
                    )}
                </Animated.View>
            </View>
        </View>
    );
};
