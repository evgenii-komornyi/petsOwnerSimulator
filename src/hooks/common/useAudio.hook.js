import { useState } from 'react';
import { Audio } from 'expo-av';

import { sounds } from '../../data/sounds';
import useSettingsStore from '../../app/useSettingsStore';

export const useAudio = () => {
    const soundObject = new Audio.Sound();
    const [isPlaying, setIsPlaying] = useState(false);
    const { isSoundMuted } = useSettingsStore(state => state);

    const playSound = async audio => {
        if (!isPlaying) {
            try {
                setIsPlaying(true);

                await soundObject.loadAsync(sounds[audio]);
                await soundObject.playAsync();
                await soundObject.setIsMutedAsync(isSoundMuted);

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
