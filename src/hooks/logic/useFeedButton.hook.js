import { useState } from 'react';
import useOwnerStore from '../../app/useOwnerStore';
import { useAudio } from '../common/useAudio.hook';
import useTongueStore from '../../app/useTongueStore';

export const useFeedButton = (catId, item) => {
    const { feedPet } = useOwnerStore(state => state);
    const { setIsTongueVisible } = useTongueStore(state => state);
    const [playSound] = useAudio();

    const [isDisabled, setIsDisabled] = useState(false);

    const feed = async () => {
        await feedPet(catId, item.id);
        await playSound('eating');

        setIsTongueVisible(true);
        setIsDisabled(true);

        setTimeout(() => {
            setIsDisabled(false);
            setIsTongueVisible(false);
        }, 2000);
    };

    return [isDisabled, feed];
};
