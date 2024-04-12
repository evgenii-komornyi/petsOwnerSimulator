import React, { memo } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';

import { View, Image } from 'react-native';

import { CustomText } from '../custom-text/custom-text.component';
import { Animation } from '../animation/animation.component';
import { Holiday } from '../holiday/holiday.component';

import useHolidayStore from '../../app/useHolidayStore.js';

import { usePetCard } from '../../hooks/logic/pets/usePetCard.hook';

import { styles } from './pets.styles';
import { styles as holidayStyles } from '../holiday/holiday.styles';
import { Effect } from './effect/effect.component.jsx';

const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 80,
};

export const PetCard = memo(
    ({
        id,
        currentImage,
        blinkAnimation,
        animation,
        name,
        img,
        petIdx,
        stats,
        moodIncreasing,
        touchStart,
        touchEnd,
    }) => {
        const [onSwipe] = usePetCard(id, stats, moodIncreasing, config);
        const { frames } = useHolidayStore(state => state);

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
                        source={{ uri: currentImage }}
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
                    {blinkAnimation !== null ? (
                        <Image
                            source={{ uri: blinkAnimation }}
                            style={[
                                { position: 'absolute', zIndex: 12 },
                                styles.petImage,
                                styles.imageSize,
                            ]}
                        />
                    ) : null}
                    {stats.hydration === 0 ? (
                        <Effect path={img.dehydrated} />
                    ) : null}
                    <Animation petId={id} animation={animation} />
                    {frames.length && petIdx <= frames.length - 1 ? (
                        <Holiday
                            imageUri={frames[petIdx].uri}
                            containerStyles={[holidayStyles.petFrameContainer]}
                            imageStyles={[holidayStyles.petFrame]}
                        />
                    ) : null}
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
    }
);
