import { Audio } from 'expo-av';

import { sounds } from '../../helpers/sounds';

export const useAudio = () => {
    const soundObject = new Audio.Sound();

    const playSound = async audio => {
        try {
            await soundObject.loadAsync(sounds[audio]);
            await soundObject.playAsync();

            setTimeout(async () => {
                await soundObject.unloadAsync();
            }, 2500);
        } catch (e) {
            console.log(e);
        }
    };

    return [playSound];
};
