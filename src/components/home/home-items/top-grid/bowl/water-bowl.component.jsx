import React from 'react';
import { ImageBackground, View, Pressable } from 'react-native';

import useOwnerStore from '../../../../../app/useOwnerStore';

import { useRelation } from '../../../../../hooks/common/useRelation.hook';
import { useAudio } from '../../../../../hooks/common/useAudio.hook';

import { isObjectExists } from '../../../../../helpers/objects.helper';

import { styles } from './bowls.styles';

export const WaterBowl = () => {
    const { feeder } = useOwnerStore(state => state.home.livingRoom);
    const { refillAndCleanBowl } = useOwnerStore(state => state);
    const { calculateContainerSizeAndOffsets } = useRelation();
    const [playSound] = useAudio();

    const { width, height, top, left } =
        calculateContainerSizeAndOffsets('waterBowl');

    const refillAndClean = async () => {
        refillAndCleanBowl();
        await playSound('cleanRenewBowl');
    };

    return (
        isObjectExists(feeder) && (
            <View style={[styles.bowlContainer, { width, height, top, left }]}>
                <Pressable onPress={refillAndClean}>
                    <ImageBackground
                        resizeMode="center"
                        source={{ uri: feeder?.image.currentImage }}
                        style={styles.bowlImage}
                    />
                </Pressable>
            </View>
        )
    );
};
