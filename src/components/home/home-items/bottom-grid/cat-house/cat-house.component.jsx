import React from 'react';
import { ImageBackground, View } from 'react-native';

import useOwnerStore from '../../../../../app/useOwnerStore';

import { styles } from './cat-house.styles';

export const CatHouse = () => {
    const {
        home: {
            livingRoom: { catHouse },
        },
    } = useOwnerStore(state => state);

    return (
        Object.keys(catHouse).length !== 0 && (
            <View style={styles.catHouseContainer}>
                <ImageBackground
                    resizeMode="contain"
                    source={{ uri: catHouse.image.unused }}
                    style={styles.catHouseImage}
                ></ImageBackground>
            </View>
        )
    );
};
