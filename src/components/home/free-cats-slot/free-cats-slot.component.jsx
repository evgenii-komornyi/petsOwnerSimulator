import React from 'react';
import { Pressable, Image } from 'react-native';

import { usePetInRoom } from '../../../hooks/logic/pets/usePetInRoom.hook';

import { isObjectExists } from '../../../helpers/objects.helper';

import { styles } from './free-cats-slot.styles';

export const FreeCatsSlot = ({ petPlace, petPosition }) => {
    const { catHouse, petSize, onPressHandler } = usePetInRoom(petPlace);

    return (
        <Pressable
            style={[
                styles.slotContainer,
                {
                    width: petSize.width,
                    height: petSize.height,
                    top:
                        isObjectExists(catHouse) &&
                        petPlace === 'curledCatOnCatHouse'
                            ? petSize.topOnCatHouse
                            : !isObjectExists(catHouse) &&
                              petPlace === 'curledCatOnCatHouse'
                            ? petSize.top + 8
                            : petSize.top,
                    left:
                        isObjectExists(catHouse) &&
                        petPlace === 'curledCatOnCatHouse'
                            ? petSize.leftOnCatHouse
                            : !isObjectExists(catHouse) &&
                              petPlace === 'curledCatOnCatHouse'
                            ? petSize.left + 20
                            : petSize.left,
                },
            ]}
            onPress={onPressHandler}
        >
            <Image source={{ uri: petPosition }} style={styles.image} />
        </Pressable>
    );
};
