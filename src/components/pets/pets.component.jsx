import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';

import useOwnerStore from '../../app/useOwnerStore';

import { Pet } from './pet.component';
import { NoPets } from './no-pets.component';
import { AddPetButton } from '../add-pet-button/add-pet-button.component';
import { GameOver } from './game-over.component';

import { Constants } from '../../constants/constants';

import { styles } from './pets.styles';

export const Pets = () => {
    const { pets } = useOwnerStore(state => state);

    const flatListRef = useRef(null);

    const handleTouchStart = () => {
        flatListRef.current.setNativeProps({
            scrollEnabled: false,
        });
    };

    const handleTouchEnd = () => {
        flatListRef.current.setNativeProps({
            scrollEnabled: true,
        });
    };

    return (
        <>
            <View style={styles.wrapperContainer}>
                {pets.length === 0 ? (
                    <NoPets />
                ) : pets.length >= Constants.MAX_AVAILABLE_PETS &&
                  pets.every(pet => pet.wasTaken) ? (
                    <GameOver />
                ) : (
                    <FlatList
                        ref={flatListRef}
                        data={pets.filter(pet => !pet.wasTaken)}
                        renderItem={({ item }) => (
                            <Pet
                                item={item}
                                touchStart={handleTouchStart}
                                touchEnd={handleTouchEnd}
                            />
                        )}
                        keyExtractor={(_, index) => index}
                        key={item => item.id}
                        numColumns={1}
                        contentContainerStyle={styles.contentContainer}
                    />
                )}
            </View>
            <View style={styles.buttonContainer}>
                <AddPetButton />
            </View>
        </>
    );
};
