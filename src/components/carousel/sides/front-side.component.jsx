import React from 'react';
import { useNavigate } from 'react-router-native';
import { Image, View } from 'react-native';
import { Button } from '@rneui/themed';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './sides.styles';

export const FrontSide = ({ item: pet }) => {
    const navigate = useNavigate();
    const { adoptPet } = useOwnerStore(state => state);

    const adopt = () => {
        adoptPet(pet);
        navigate('/');
    };

    return (
        <View style={styles.cardFront}>
            <Image source={pet.img.regular} style={styles.image} />
            <Button title={`Adopt ${pet.name}`} onPress={adopt} />
        </View>
    );
};
