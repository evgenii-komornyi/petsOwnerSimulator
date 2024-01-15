import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { styles } from './free-cats-slot.styles';
import { useRelation } from '../../../hooks/common/useRelation.hook';
import { Image } from 'react-native';
import useOwnerStore from '../../../app/useOwnerStore';
import { isObjectExists } from '../../../helpers/objects.helper';

export const FreeCatsSlot = ({ petPlace, petPosition }) => {
    const { catHouse } = useOwnerStore(state => state.home.livingRoom);
    const { calculateContainerSizeAndOffsets } = useRelation();
    const [petSize, setPetSize] = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        topOnCatHouse: 25,
        leftOnCatHouse: 15,
    });

    useEffect(() => {
        const { width, height, top, left } =
            calculateContainerSizeAndOffsets(petPlace);
        setPetSize({
            width,
            height,
            top,
            left,
            topOnCatHouse: petSize.topOnCatHouse + top,
            leftOnCatHouse: petSize.leftOnCatHouse + left,
        });
    }, [petPlace]);

    return (
        <View
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
        >
            <Image source={{ uri: petPosition }} style={styles.image} />
        </View>
    );
};
