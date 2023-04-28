import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';

import useOwnerStore from '../../app/useOwnerStore';

import { Pet } from './pet.component';
import { AddPetButton } from '../add-pet-button/add-pet-button.component';
import { CustomText } from '../custom-text/custom-text.component';

import { styles } from './pets.styles';
import { Constants } from '../../constants/constants';

export const Pets = () => {
    const { pets } = useOwnerStore();
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
                    <View style={styles.textContainer}>
                        <CustomText
                            text="Welcome to the pets’ owner simulator. Here you can take care of the animals. As long as they are happy with you, you will get hpc (happy pets coins) to buy food and toys. But be careful – if you do not care of your pets well enough, shelter employees take them away to a better home. The game ends if you have no pets left."
                            style={[styles.emptyPetsText, { marginBottom: 10 }]}
                        />

                        <CustomText
                            text="As we are deeply concerned about how people sometimes are treating the animals, we decided to only offer pets from a shelter. You can read the story of every pet on the back of an adoption card (press to view). The stories are made up, but they are rather close to what really happens."
                            style={styles.emptyPetsText}
                        />
                    </View>
                ) : pets.length >= Constants.MAX_AVAILABLE_PETS &&
                  pets.every(pet => pet.wasTaken) ? (
                    <View style={styles.textContainer}>
                        <CustomText
                            text="Game Over"
                            style={styles.gameOverText}
                        />
                    </View>
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
                        contentContainerStyle={{
                            marginTop: 2,
                            paddingVertical: 10,
                            marginBottom: '30%',
                        }}
                    />
                )}
            </View>
            <View style={styles.buttonContainer}>
                <AddPetButton />
            </View>
        </>
    );
};
