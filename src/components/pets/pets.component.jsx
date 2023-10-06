import React from 'react';
import { View } from 'react-native';

import { AddPetButton } from '../add-pet-button/add-pet-button.component';

import useOwnerStore from '../../app/useOwnerStore';

import { useRenderPets } from '../../hooks/logic/renders/useRenderPets.hook';

import { styles } from './pets.styles';

export const Pets = () => {
    const { pets } = useOwnerStore(state => state);
    const { renderPetsComponent } = useRenderPets(pets);

    return (
        <>
            <View style={styles.wrapperContainer}>{renderPetsComponent()}</View>
            <View style={styles.buttonContainer}>
                <AddPetButton />
            </View>
        </>
    );
};
