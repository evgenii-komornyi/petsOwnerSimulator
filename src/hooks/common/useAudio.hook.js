import { useState } from 'react';
import { Audio } from 'expo-av';

import { sounds } from '../../data/sounds';

export const useAudio = () => {
    const soundObject = new Audio.Sound();
    const [isPlaying, setIsPlaying] = useState(false);

    const playSound = async audio => {
        if (!isPlaying) {
            try {
                setIsPlaying(true);

                await soundObject.loadAsync(sounds[audio]);
                await soundObject.playAsync();

                setTimeout(async () => {
                    await soundObject.unloadAsync();
                    setIsPlaying(false);
                }, 2500);
            } catch (e) {
                console.log(e);
                setIsPlaying(false);
            }
        }
    };

    return [playSound];
};
