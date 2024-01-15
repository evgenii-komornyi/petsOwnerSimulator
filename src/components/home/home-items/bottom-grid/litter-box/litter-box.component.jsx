import React from 'react';
import { ImageBackground, View } from 'react-native';
import { DoubleTap } from '../../../../double-tap/double-tap.component';

import { useRelation } from '../../../../../hooks/common/useRelation.hook';
import useOwnerStore from '../../../../../app/useOwnerStore';

import { useAudio } from '../../../../../hooks/common/useAudio.hook';

import { styles } from './litter-box.styles';

export const LitterBox = () => {
    const {
        home: {
            livingRoom: { litterBox },
        },
        cleanLitterBox,
    } = useOwnerStore(state => state);
    const [playSound] = useAudio();

    const checkSlotsNumber = slots => {
        if (Object.keys(litterBox).length === 0) return;

        if (slots <= 3 && slots >= 1) return litterBox.image.used;

        if (slots === 0) return litterBox.image.full;

        return litterBox.image.empty;
    };

    const cleanupLitterBox = async () => {
        await cleanLitterBox();
        await playSound('litterBoxCleanup');
    };

    const { calculateContainerSizeAndOffsets } = useRelation();

    const { width, height, top, left } =
        calculateContainerSizeAndOffsets('litterBox');

    return (
        Object.keys(litterBox).length !== 0 && (
            <View
                style={[
                    styles.litterBoxContainer,
                    { width, height, top, left },
                ]}
            >
                <DoubleTap singleTap={cleanupLitterBox}>
                    <ImageBackground
                        resizeMode="center"
                        source={{ uri: checkSlotsNumber(litterBox.slots) }}
                        style={styles.litterBoxImage}
                    ></ImageBackground>
                </DoubleTap>
            </View>
        )
    );
};
