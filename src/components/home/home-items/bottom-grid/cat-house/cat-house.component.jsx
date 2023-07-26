import React from 'react';
import { ImageBackground, View } from 'react-native';

import useOwnerStore from '../../../../../app/useOwnerStore';

import { styles } from './cat-house.styles';

export const CatHouse = () => {
    const {
        inventory: { catHouse },
    } = useOwnerStore(state => state);

    return (
        <View style={styles.catHouseContainer}>
            <ImageBackground
                resizeMode="contain"
                source={{ uri: catHouse.image.unused }}
                style={styles.catHouseImage}
            ></ImageBackground>
        </View>
    );
};
