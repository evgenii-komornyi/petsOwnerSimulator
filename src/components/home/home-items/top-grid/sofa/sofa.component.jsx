import React from 'react';
import { View, ImageBackground } from 'react-native';

import { Toy } from './toy/toy.component';

import useOwnerStore from '../../../../../app/useOwnerStore';

import { isObjectExists } from '../../../../../helpers/objects.helper';

import { styles } from './sofa.styles';

const sofa = { uri: 'asset:/images/home-items/sofa.png' };

export const Sofa = () => {
    const { toy } = useOwnerStore(state => state.home.livingRoom);

    return (
        <View style={[styles.sofaContainer]}>
            <ImageBackground
                source={sofa}
                resizeMode="contain"
                style={styles.sofaImage}
            >
                {isObjectExists(toy) && toy.durability > 0 && <Toy />}
            </ImageBackground>
        </View>
    );
};
