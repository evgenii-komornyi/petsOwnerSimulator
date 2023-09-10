import React from 'react';
import { Image } from 'react-native';

import useAnimationStore from '../../app/useAnimationStore';

import { styles } from './animation.styles';

export const Animation = ({ petId, animation }) => {
    const { animations, generalType } = useAnimationStore(state => state);

    return (
        <Image
            source={
                Object.keys(animations).length &&
                generalType &&
                animations[generalType][petId]
                    ? {
                          uri: animation[generalType],
                      }
                    : null
            }
            style={[styles.animationSize, styles.lickAnimation]}
        />
    );
};
