import React from 'react';
import { CustomText } from '../../../../../custom-text/custom-text.component';
import { Image, View } from 'react-native';

import { styles } from '../../developer-section.styles';

export const PetDetails = ({ pet }) => {
    return (
        <>
            <CustomText text={pet.name} style={styles.petName} />
            <View style={{ flex: 1 }}>
                <CustomText
                    text="Current image"
                    style={{ fontWeight: 'bold' }}
                />
                <Image
                    source={{ uri: pet.currentImage }}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <CustomText text="Stats" style={{ fontWeight: 'bold' }} />
                <CustomText text={`Health: ${pet.stats.health}`} />
                <CustomText text={`Satiety: ${pet.stats.satiety}`} />
                <CustomText text={`Mood: ${pet.stats.mood}`} />
                <CustomText text={`Hydration: ${pet.stats.hydration}`} />
                <CustomText text={`WasTaken: ${pet.wasTaken}`} />
            </View>
        </>
    );
};
