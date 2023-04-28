import React from 'react';
import { ImageBackground, View } from 'react-native';
import { DoubleTap } from '../../../../double-tap/double-tap.component';

import useOwnerStore from '../../../../../app/useOwnerStore';

import { useAudio } from '../../../../../hooks/common/useAudio.hook';
import { useVibrate } from '../../../../../hooks/common/useVibrate.hook';

import { styles } from './litter.styles';

export const Litter = () => {
    const { litterBox, cleanLitterBox } = useOwnerStore();
    const [playSound] = useAudio();
    const [vibrate] = useVibrate();

    const checkSlotsNumber = slots => {
        if (Object.keys(litterBox).length === 0) return;

        if (slots <= 3 && slots >= 1) return litterBox.image.used;

        if (slots === 0) return litterBox.image.full;

        return litterBox.image.empty;
    };

    const cleanupLitter = () => {
        cleanLitterBox();
        playSound('litterCleanup');
        vibrate();
    };

    return (
        <View style={styles.litterContainer}>
            <DoubleTap singleTap={cleanupLitter}>
                <ImageBackground
                    resizeMode="contain"
                    source={checkSlotsNumber(litterBox.slots)}
                    style={styles.litterImage}
                ></ImageBackground>
            </DoubleTap>
        </View>
    );
};
