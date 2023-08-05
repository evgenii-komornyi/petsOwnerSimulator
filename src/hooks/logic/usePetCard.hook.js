import useOwnerStore from '../../app/useOwnerStore';

import { useAudio } from '../common/useAudio.hook';

export const usePetCard = (id, stats, config) => {
    const { petPet } = useOwnerStore(state => state);
    const [playSound] = useAudio();

    const onSwipe = async (direction, { dx, dy }) => {
        if (stats.health === 0 || stats.satiety === 0) {
            return;
        }

        await playSound('purring');

        await petPet(id, getDirection(direction, dx, dy));
    };

    const getDirection = (direction, dx, dy) => {
        if (direction) {
            return direction;
        } else {
            if (
                Math.abs(dx) > config.directionalOffsetThreshold &&
                Math.abs(dy) > config.directionalOffsetThreshold
            ) {
                return 'SWIPE_DIAGONAL';
            }
        }
    };

    return [onSwipe];
};
