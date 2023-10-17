import React from 'react';
import { View, ImageBackground } from 'react-native';

import { Toy } from './toy/toy.component';

import useOwnerStore from '../../../../../app/useOwnerStore';

import { isObjectExists } from '../../../../../helpers/objects.helper';

import { styles } from './sofa.styles';

export const Sofa = () => {
    const { sofa, toy } = useOwnerStore(state => state.home.livingRoom);

    return (
        <View style={[styles.sofaContainer]}>
            <ImageBackground
                source={{ uri: sofa.image.unused }}
                resizeMode="contain"
                style={styles.sofaImage}
            >
                {isObjectExists(toy) && toy.durability > 0 && <Toy />}
            </ImageBackground>
        </View>
    );
};
