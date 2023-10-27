import React from 'react';
import { View, FlatList } from 'react-native';

import { CustomText } from '../custom-text/custom-text.component';
import { Pets } from './pets.component';

import { styles } from './carousel.styles';
import useOwnerStore from '../../app/useOwnerStore';
import useShelterStore from '../../app/useShelterStore';

export const PetsList = () => {
    const ownerPets = useOwnerStore(state => state.pets);
    const { animals } = useShelterStore(state => state.shelter);

    const renderItem = ({ item: { type, pets } }) => (
        <View style={styles.slide}>
            <View style={styles.typeContainer}>
                <CustomText style={styles.type} text={type} />
            </View>
            <Pets
                animals={pets.filter(
                    pet => !ownerPets.some(ownerPet => ownerPet.id === pet.id)
                )}
                type={type}
            />
        </View>
    );

    return (
        <FlatList
            data={animals}
            renderItem={renderItem}
            nestedScrollEnabled={true}
        />
    );
};
