import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';

import { View, Image } from 'react-native';

import { CustomText } from '../custom-text/custom-text.component';

import { usePetCard } from '../../hooks/logic/usePetCard.hook';

import { styles } from './pets.styles';

const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 80,
};

export const PetCard = ({
    id,
    img,
    name,
    mood,
    moodIncreasing,
    touchStart,
    touchEnd,
}) => {
    const [onSwipe] = usePetCard(id, mood, moodIncreasing, config);

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
                <Image source={img} style={styles.petImage} />
                <CustomText text={name} style={styles.petName} />
            </View>
        </GestureRecognizer>
    );
};
