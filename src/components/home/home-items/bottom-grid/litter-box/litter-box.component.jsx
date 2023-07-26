import React from 'react';
import { ImageBackground, View } from 'react-native';
import { DoubleTap } from '../../../../double-tap/double-tap.component';

import useOwnerStore from '../../../../../app/useOwnerStore';

import { useAudio } from '../../../../../hooks/common/useAudio.hook';
import { useVibrate } from '../../../../../hooks/common/useVibrate.hook';

import { isObjectExists } from '../../../../../helpers/objects.helper';

import { styles } from './litter-box.styles';

export const LitterBox = () => {
    const {
        inventory: { litterBox },
        cleanLitterBox,
    } = useOwnerStore(state => state);
    const [playSound] = useAudio();
    const [vibrate] = useVibrate();

    const checkSlotsNumber = slots => {
        if (!isObjectExists(litterBox)) return;

        if (slots <= 3 && slots >= 1) return litterBox.image.used;

        if (slots === 0) return litterBox.image.full;

        return litterBox.image.empty;
    };

    const cleanupLitterBox = () => {
        cleanLitterBox();
        playSound('litterBoxCleanup');
        vibrate();
    };

    return (
        <View style={styles.litterBoxContainer}>
            <DoubleTap singleTap={cleanupLitterBox}>
                <ImageBackground
                    resizeMode="contain"
                    source={{ uri: checkSlotsNumber(litterBox.slots) }}
                    style={styles.litterBoxImage}
                ></ImageBackground>
            </DoubleTap>
        </View>
    );
};
