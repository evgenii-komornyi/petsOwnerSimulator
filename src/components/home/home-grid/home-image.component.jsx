import React from 'react';
import { ImageBackground } from 'react-native';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './home-grid.styles';

export const HomeImage = ({ children }) => {
    const {
        home: {
            livingRoom: { image },
        },
    } = useOwnerStore(state => state);

    return (
        <ImageBackground
            source={image}
            resizeMode="contain"
            style={styles.image}
        >
            {children}
        </ImageBackground>
    );
};
