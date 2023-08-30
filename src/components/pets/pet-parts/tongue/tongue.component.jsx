import React from 'react';
import { Image } from 'react-native';

import { useTongue } from '../../../../hooks/logic/useTongue.hook';

import { styles as commonStyle } from '../../pets.styles';
import { styles } from './tongue.styles';

export const Tongue = () => {
    const [imageIndex, isTongueVisible, tongueImages] = useTongue();

    return (
        isTongueVisible && (
            <Image
                source={{
                    uri: tongueImages[imageIndex],
                }}
                style={[styles.tongueImage, commonStyle.imageSize]}
            />
        )
    );
};
