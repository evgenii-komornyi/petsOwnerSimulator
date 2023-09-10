import { useState } from 'react';
import useOwnerStore from '../../../app/useOwnerStore';
import useAnimationStore from '../../../app/useAnimationStore';
import { useAudio } from '../../common/useAudio.hook';

export const useFeedButton = (catId, item) => {
    const { feedPet } = useOwnerStore(state => state);
    const { startAnimation, stopAnimation } = useAnimationStore(state => state);
    const [playSound] = useAudio();

    const [isDisabled, setIsDisabled] = useState(false);

    const feed = async () => {
        await feedPet(catId, item.id);
        await playSound('eating');

        setIsDisabled(true);
        startAnimation('lick', catId);

        setTimeout(() => {
            setIsDisabled(false);
            stopAnimation('lick', catId);
        }, 2000);

        return catId;
    };

    return [isDisabled, feed];
};
