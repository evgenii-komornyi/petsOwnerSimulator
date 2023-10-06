import { useState } from 'react';
import useOwnerStore from '../../../app/useOwnerStore';
import useAnimationStore from '../../../app/useAnimationStore';
import { useAudio } from '../../common/useAudio.hook';

export const useFeedButton = (petId, item) => {
    const { feedPet } = useOwnerStore(state => state);
    const { startAnimation, stopAnimation } = useAnimationStore(state => state);
    const [playSound] = useAudio();

    const [isDisabled, setIsDisabled] = useState(false);

    const feed = async () => {
        await feedPet(petId, item.id);
        await playSound('eating');

        setIsDisabled(true);
        startAnimation('lick', petId);

        setTimeout(() => {
            setIsDisabled(false);
            stopAnimation('lick', petId);
        }, 2000);

        return petId;
    };

    return [isDisabled, feed];
};
