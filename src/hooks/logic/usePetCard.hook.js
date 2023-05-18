import useOwnerStore from '../../app/useOwnerStore';

import { useAudio } from '../common/useAudio.hook';

import { Constants } from '../../constants/constants';

export const usePetCard = (id, stats, moodIncreasing, config) => {
    const { setMoodLevel } = useOwnerStore(state => state);
    const [playSound] = useAudio();

    const onSwipe = (direction, { dx, dy }) => {
        if (stats.health === 0 || stats.satiety === 0) {
            return;
        }

        const returnedDirection = getDirection(direction, dx, dy);
        playSound('purring');

        switch (returnedDirection) {
            case 'SWIPE_UP':
                setMoodLevel(
                    id,
                    stats.mood >= Constants.MAX_MOOD_LEVEL
                        ? Constants.MAX_MOOD_LEVEL
                        : stats.mood + moodIncreasing.up
                );
                break;
            case 'SWIPE_DOWN':
                setMoodLevel(
                    id,
                    stats.mood >= Constants.MAX_MOOD_LEVEL
                        ? Constants.MAX_MOOD_LEVEL
                        : stats.mood + moodIncreasing.down
                );
                break;
            case 'SWIPE_LEFT':
                setMoodLevel(
                    id,
                    stats.mood >= Constants.MAX_MOOD_LEVEL
                        ? Constants.MAX_MOOD_LEVEL
                        : stats.mood + moodIncreasing.left
                );
                break;
            case 'SWIPE_RIGHT':
                setMoodLevel(
                    id,
                    stats.mood >= Constants.MAX_MOOD_LEVEL
                        ? Constants.MAX_MOOD_LEVEL
                        : stats.mood + moodIncreasing.right
                );
                break;
            case 'SWIPE_DIAGONAL':
                setMoodLevel(
                    id,
                    stats.mood >= Constants.MAX_MOOD_LEVEL
                        ? Constants.MAX_MOOD_LEVEL
                        : stats.mood + moodIncreasing.diagonal
                );
                break;
        }
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
