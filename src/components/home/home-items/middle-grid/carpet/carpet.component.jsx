import React from 'react';
import { ImageBackground } from 'react-native';
import { Image } from 'react-native';

import { useAudio } from '../../../../../hooks/common/useAudio.hook';
import useOwnerStore from '../../../../../app/useOwnerStore';

import { DoubleTap } from '../../../../double-tap/double-tap.component';

import { styles } from './carpet.styles';

export const Carpet = () => {
    const {
        home: { poopOnCarpetCount },
        cleanRoom,
    } = useOwnerStore(state => state);

    const [playSound] = useAudio();

    const roomCleanup = () => {
        cleanRoom();
        playSound('homeCleanup');
    };

    return (
        <ImageBackground
            source={{ uri: 'asset:/images/home-items/carpets/seal.png' }}
            resizeMode="contain"
            style={styles.carpetImage}
        >
            {poopOnCarpetCount > 0 && (
                <DoubleTap singleTap={roomCleanup}>
                    <Image
                        source={{ uri: 'asset:/images/home-items/poop.png' }}
                        style={{
                            width: 30,
                            height: 30,
                            position: 'relative',
                            top: '30%',
                            left: '25%',
                        }}
                    />
                </DoubleTap>
            )}
        </ImageBackground>
    );
};
