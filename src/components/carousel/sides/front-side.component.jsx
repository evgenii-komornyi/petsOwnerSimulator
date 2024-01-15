import React from 'react';
import { Image, View } from 'react-native';
import { Button } from '@rneui/themed';

import { useFrontCard } from '../../../hooks/logic/shelter/useFrontCard.hook';

import { styles } from './sides.styles';

export const FrontSide = ({ type, item: pet }) => {
    const { adopt, isPetAdopted } = useFrontCard(type, pet);

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
