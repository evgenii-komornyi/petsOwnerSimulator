import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';

import { View, Image } from 'react-native';

import { CustomText } from '../custom-text/custom-text.component';
import { Animation } from '../animation/animation.component';

import { usePetCard } from '../../hooks/logic/pets/usePetCard.hook';

import { styles } from './pets.styles';

const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 80,
};

export const PetCard = ({
    id,
    img,
    animation,
    name,
    stats,
    moodIncreasing,
    touchStart,
    touchEnd,
}) => {
    const [onSwipe] = usePetCard(id, stats, moodIncreasing, config);

    return (
        <GestureRecognizer
            onSwipe={(direction, state) => onSwipe(direction, state)}
            config={config}
        >
            <View
                style={styles.petCardContainer}
                onTouchStart={touchStart}
                onTouchEnd={touchEnd}
            >
                <Image
                    source={{ uri: img }}
                    style={[
                        styles.petImage,
                        styles.imageSize,
                        {
                            backgroundColor:
                                stats.health === 0
                                    ? 'rgba(0, 0, 0, 0.8)'
                                    : 'rgba(106, 90, 205, .8)',
                        },
                    ]}
                />
                {/* <Tongue petId={id} tongueAnimation={tongue} /> */}
                <Animation petId={id} animation={animation} />
                <CustomText
                    text={name}
                    style={[
                        styles.petName,
                        {
                            backgroundColor:
                                stats.health === 0
                                    ? 'rgba(255, 255, 255, 0.8)'
                                    : 'rgba(218, 165, 32, 0.8)',
                        },
                    ]}
                />
            </View>
        </GestureRecognizer>
    );
};
