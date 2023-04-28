import React from 'react';
import { View, Dimensions, FlatList } from 'react-native';

import { CustomText } from '../custom-text/custom-text.component';
import { Pets } from './pets.component';

import { pets } from '../../data/pets';

import { styles } from './carousel.styles';
import useOwnerStore from '../../app/useOwnerStore';

export const PetsList = () => {
    const ownerPets = useOwnerStore(state => state.pets);

    const renderItem = ({ item: { type, animals } }) => (
        <View style={styles.slide}>
            <View style={styles.typeContainer}>
                <CustomText style={styles.type} text={type} />
            </View>
            <Pets
                animals={animals.filter(
                    pet => !ownerPets.some(ownerPet => ownerPet.id === pet.id)
                )}
            />
        </View>
    );

    return <FlatList data={pets} renderItem={renderItem} />;
};
