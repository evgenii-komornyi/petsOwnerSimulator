import React from 'react';
import { Pressable, ImageBackground, View } from 'react-native';

import { useAudio } from '../../../../../hooks/common/useAudio.hook';
import { useRelation } from '../../../../../hooks/common/useRelation.hook';

import useOwnerStore from '../../../../../app/useOwnerStore';

import { styles } from './window.styles';

export const Window = () => {
    const {
        home: {
            livingRoom: {
                window: { isWindowOpen, currentWindowImage },
            },
        },
        interactWithWindow,
    } = useOwnerStore(state => state);

    const { calculateContainerSizeAndOffsets } = useRelation();

    const { width, height, top, left } =
        calculateContainerSizeAndOffsets('window');

    const [playSound] = useAudio();

    const windowActions = async () => {
        setTimeout(async () => {
            await interactWithWindow();
        }, 300);
        await playSound(!isWindowOpen ? 'openWindow' : 'closeWindow');
    };

    return (
        <View
            style={[
                styles.windowContainer,
                {
                    width,
                    height,
                    top,
                    left,
                },
            ]}
        >
            <Pressable
                onPress={windowActions}
                style={[styles.windowButtonContainer]}
            >
                <ImageBackground
                    source={{ uri: currentWindowImage }}
                    resizeMode="center"
                    style={styles.image}
                />
            </Pressable>
        </View>
    );
};
