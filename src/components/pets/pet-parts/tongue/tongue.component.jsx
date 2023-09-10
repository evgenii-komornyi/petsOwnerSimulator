import React from 'react';
import { Image } from 'react-native';

import useTongueStore from '../../../../app/useTongueStore';

import { styles as commonStyle } from '../../pets.styles';
import { styles } from './tongue.styles';

export const Tongue = ({ tongueAnimation }) => {
    const { isTongueVisible } = useTongueStore(state => state);

    return (
        <Image
            source={
                isTongueVisible
                    ? {
                          uri: tongueAnimation,
                      }
                    : null
            }
            style={[styles.tongueImage, commonStyle.imageSize]}
        />
    );
};
