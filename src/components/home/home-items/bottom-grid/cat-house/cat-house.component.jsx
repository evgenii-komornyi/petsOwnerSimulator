import React from 'react';
import { ImageBackground, View } from 'react-native';

import useOwnerStore from '../../../../../app/useOwnerStore';

import { styles } from './cat-house.styles';

export const CatHouse = () => {
    const { catHouse } = useOwnerStore();

    return (
        <View style={styles.catHouseContainer}>
            <ImageBackground
                resizeMode="contain"
                source={catHouse.image.new}
                style={styles.catHouseImage}
            ></ImageBackground>
        </View>
    );
};
