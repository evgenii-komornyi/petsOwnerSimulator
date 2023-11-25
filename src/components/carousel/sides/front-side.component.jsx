import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-native';
import { Image, View } from 'react-native';
import { Button } from '@rneui/themed';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './sides.styles';

export const FrontSide = ({ type, item: pet }) => {
    const navigate = useNavigate();
    const { adoptPet, pets } = useOwnerStore(state => state);

    const [ownerPet, setOwnerPet] = useState(null);

    useEffect(() => {
        setOwnerPet(pets.find(op => op.id === pet.id));
    }, []);

    const adopt = async () => {
        await adoptPet(type, pet);
        navigate('/');
    };

    const isPetAdopted = ownerPet && ownerPet.id === pet.id;

    return (
        <View style={styles.cardFront}>
            <Image
                source={{
                    uri: pet.img.regular,
                }}
                style={styles.image}
            />
            <Button
                title={
                    !isPetAdopted ? `Adopt ${pet.name}` : `${pet.name} adopted!`
                }
                disabled={isPetAdopted}
                onPress={adopt}
            />
        </View>
    );
};
