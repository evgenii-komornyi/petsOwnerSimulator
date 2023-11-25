import { useState } from 'react';
import useOwnerStore from '../../../app/useOwnerStore';
import useAnimationStore from '../../../app/useAnimationStore';
import { useAudio } from '../../common/useAudio.hook';

export const useFeedButton = (petId, item) => {
    const { feedPet, saveGame } = useOwnerStore(state => state);
    const { startAnimation, stopAnimation } = useAnimationStore(state => state);
    const [playSound] = useAudio();

    const [isDisabled, setIsDisabled] = useState(false);

    const feed = async () => {
        if (isDisabled) {
            return;
        }

        setIsDisabled(true);

        try {
            await feedPet(petId, item.id);
            await playSound('eating');
            startAnimation('lick', petId);

            setTimeout(() => {
                setIsDisabled(false);
                stopAnimation('lick', petId);
            }, 2000);
            await saveGame();
        } catch (error) {
            console.err(error);
        }
    };

    return [isDisabled, feed];
};
