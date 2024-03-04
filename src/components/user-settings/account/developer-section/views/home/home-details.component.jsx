import React, { useEffect } from 'react';
import { View } from 'react-native';

import { CustomText } from '../../../../../custom-text/custom-text.component';

import useOwnerStore from '../../../../../../app/useOwnerStore';

import { isObjectExists } from '../../../../../../helpers/objects.helper';

import { styles } from '../../developer-section.styles';

export const HomeDetails = () => {
    const {
        home: { livingRoom },
    } = useOwnerStore(state => state);

    return (
        <View style={styles.homeContainer}>
            <CustomText
                text={`Pee: ${livingRoom.excrete.pee.peeOnFloorCount}`}
                style={{ fontSize: 12 }}
            />
            <CustomText
                text={`Poo: ${livingRoom.excrete.poop.poopOnFloorCount}`}
                style={{ fontSize: 12 }}
            />
            <CustomText
                text={`Smell: ${livingRoom.smell.smell}`}
                style={{ fontSize: 12 }}
            />
            <CustomText
                text={`Sofa durability: ${livingRoom.sofa.durability}`}
                style={{ fontSize: 12 }}
            />
            {isObjectExists(livingRoom.catHouse) && (
                <>
                    <CustomText
                        text={`Cathouse durability: ${livingRoom.catHouse.durability}`}
                        style={{ fontSize: 12 }}
                    />
                </>
            )}
            {isObjectExists(livingRoom.litterBox) && (
                <>
                    <CustomText
                        text={`LitterBox current slot: ${livingRoom.litterBox.slots}`}
                        style={{ fontSize: 12 }}
                    />
                    <CustomText
                        text={`LitterBox maxSlots: ${livingRoom.litterBox.maxSlots}`}
                        style={{ fontSize: 12 }}
                    />
                </>
            )}
            {isObjectExists(livingRoom.feeder) && (
                <>
                    <CustomText
                        text={`Feeder currentSlots: ${livingRoom.feeder.currentSlots}`}
                        style={{ fontSize: 12 }}
                    />
                    <CustomText
                        text={`Feeder maxSlots: ${livingRoom.feeder.maxSlots}`}
                        style={{ fontSize: 12 }}
                    />
                    <CustomText
                        text={`Feeder dirtinessCalmDown: ${livingRoom.feeder.dirtinessCalmDown}`}
                        style={{ fontSize: 12 }}
                    />
                </>
            )}
            {isObjectExists(livingRoom.toy) && (
                <>
                    <CustomText
                        text={`Toy durability: ${livingRoom.toy.durability}`}
                        style={{ fontSize: 12 }}
                    />
                    <CustomText
                        text={`Toy maxDurability: ${livingRoom.toy.maxDurability}`}
                        style={{ fontSize: 12 }}
                    />
                </>
            )}
        </View>
    );
};
