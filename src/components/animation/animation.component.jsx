import React from 'react';
import { Image } from 'react-native';

import useAnimationStore from '../../app/useAnimationStore';

import { styles } from './animation.styles';

export const Animation = ({ petId, animation }) => {
    const { animations, generalType } = useAnimationStore(state => state);

    return Object.keys(animations).length &&
        generalType &&
        animations[generalType][petId] ? (
        <Image
            source={{
                uri: animation[generalType],
            }}
            style={[styles.animationSize, styles.lickAnimation]}
        />
    ) : null;
};
