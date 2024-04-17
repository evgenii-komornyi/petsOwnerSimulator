import { useState, useEffect } from 'react';
import useOwnerStore from '../../../app/useOwnerStore';
import { useRelation } from '../../common/useRelation.hook';
import { useAudio } from '../../common/useAudio.hook';

import { getRandom } from '../../../helpers/random.helper';

const twoCatsSounds = ['mef', 'meow'];

export const usePetInRoom = petPlace => {
    const { catHouse } = useOwnerStore(state => state.home.livingRoom);
    const { calculateContainerSizeAndOffsets } = useRelation();
    const [petSize, setPetSize] = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        topOnCatHouse: 25,
        leftOnCatHouse: 15,
    });

    useEffect(() => {
        const { width, height, top, left } =
            calculateContainerSizeAndOffsets(petPlace);
        setPetSize({
            width,
            height,
            top,
            left,
            topOnCatHouse: petSize.topOnCatHouse + top,
            leftOnCatHouse: petSize.leftOnCatHouse + left,
        });
    }, [petPlace]);

    const [playSound] = useAudio();

    const onPressHandler = async () => {
        await playSound(twoCatsSounds[getRandom(twoCatsSounds.length)]);
    };

    return { catHouse, petSize, onPressHandler };
};
