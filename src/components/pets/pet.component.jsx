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
    petIdx,
    item: {
        id,
        name,
        currentImage,
        img,
        animation,
        stats,
        statsIncreasing,
        maxValues,
    },
    touchStart,
    touchEnd,
}) => {
    const [isVisible, toggleVisibility, animatedHeight] = useToggleActions(
        { height: 130 },
        stats.health
    );
    const { blinkImage } = usePet(stats, img);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.petContainer}>
                <PetCard
                    currentImage={currentImage}
                    blinkAnimation={blinkImage}
                    animation={animation}
                    name={name}
                    id={id}
                    img={img}
                    petIdx={petIdx}
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
                            <Actions petId={id} />
                        </View>
                    )}
                </Animated.View>
            </View>
        </View>
    );
};
