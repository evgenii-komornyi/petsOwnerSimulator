import React from 'react';
import { Image } from 'react-native';
import { styles } from '../pets.styles';

export const Effect = ({ path }) => {
    return (
        <Image
            source={{ uri: path }}
            style={[
                { position: 'absolute', zIndex: 10 },
                styles.petImage,
                styles.imageSize,
            ]}
        />
    );
};
