import React from 'react';
import { View, ImageBackground } from 'react-native';

import { Toy } from './toy/toy.component';

import { useRelation } from '../../../../../hooks/common/useRelation.hook';
import useOwnerStore from '../../../../../app/useOwnerStore';

import { isObjectExists } from '../../../../../helpers/objects.helper';

import { styles } from './sofa.styles';

export const Sofa = () => {
    const { sofa, toy } = useOwnerStore(state => state.home.livingRoom);
    const { calculateContainerSizeAndOffsets } = useRelation();

    const { width, height, top, left } =
        calculateContainerSizeAndOffsets('sofa');

    return (
        <View style={[styles.sofaContainer, { width, height, top, left }]}>
            <ImageBackground
                source={{ uri: sofa.image?.unused }}
                resizeMode="center"
                style={styles.sofaImage}
            >
                {isObjectExists(toy) && toy.durability > 0 && <Toy />}
            </ImageBackground>
        </View>
    );
};
