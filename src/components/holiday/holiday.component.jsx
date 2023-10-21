import React from 'react';
import { View, Pressable } from 'react-native';
import { Image } from '@rneui/themed';

import { useHolidayAnimation } from '../../hooks/logic/holidays/useHolidayAnimation.hook';

export const Holiday = ({
    imageStyles,
    containerStyles,
    imageUri,
    animation = null,
}) => {
    const { playAnimation, isAnimationPlay } = useHolidayAnimation();

    return (
        <View style={[...containerStyles]}>
            <Pressable onPress={() => playAnimation(animation)}>
                <Image
                    source={{ uri: !isAnimationPlay ? imageUri : animation }}
                    style={[...imageStyles]}
                />
            </Pressable>
        </View>
    );
};
