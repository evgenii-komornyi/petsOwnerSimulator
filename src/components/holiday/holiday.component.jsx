import React from 'react';
import { View, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { Image } from '@rneui/themed';

import { useHolidayAnimation } from '../../hooks/logic/holidays/useHolidayAnimation.hook';

import { styles } from './holiday.styles';
import { useRef } from 'react';

export const Holiday = ({
    imageStyles,
    containerStyles,
    imageUri,
    animation = null,
}) => {
    const { playAnimation, isAnimationPlay } = useHolidayAnimation(animation);

    const currentImage = useRef({
        uri: isAnimationPlay ? animation : imageUri,
    });

    return animation === null ? (
        <View style={[...containerStyles]}>
            <Image source={{ uri: imageUri }} style={[...imageStyles]} />
        </View>
    ) : (
        <View style={[...containerStyles]}>
            <TouchableWithoutFeedback onPress={playAnimation}>
                <View>
                    <ImageBackground
                        source={{
                            uri: imageUri,
                        }}
                        style={styles.animationContainer}
                        imageStyle={[...imageStyles]}
                        resizeMode="center"
                    />
                    {isAnimationPlay ? (
                        <ImageBackground
                            source={{
                                uri: animation,
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                            }}
                            imageStyle={[...imageStyles]}
                            resizeMode="center"
                        />
                    ) : null}
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};
