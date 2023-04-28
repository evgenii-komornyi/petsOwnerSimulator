import React, { useState } from 'react';
import { Pressable, ImageBackground } from 'react-native';

import useOwnerStore from '../../../../../app/useOwnerStore';

import { styles } from './window.styles';
import { useAudio } from '../../../../../hooks/common/useAudio.hook';

const opened = {
    uri: 'asset:/images/home-items/window_open_day.png',
};
const closed = {
    uri: 'asset:/images/home-items/window_closed_day.png',
};

export const Window = () => {
    const {
        home: { isWindowOpen },
        openCloseWindow,
    } = useOwnerStore();

    const [playSound] = useAudio();

    const windowActions = () => {
        openCloseWindow();
        playSound(!isWindowOpen ? 'openWindow' : 'closeWindow');
    };

    return (
        <Pressable
            onPress={windowActions}
            style={[
                styles.windowButtonContainer,
                { marginLeft: !isWindowOpen ? 0 : 2.4 },
            ]}
        >
            <ImageBackground
                source={isWindowOpen ? opened : closed}
                resizeMode="contain"
                style={styles.image}
            />
        </Pressable>
    );
};