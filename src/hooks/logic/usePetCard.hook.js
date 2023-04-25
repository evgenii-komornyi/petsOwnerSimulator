import useOwnerStore from '../../app/useOwnerStore';

import { useAudio } from '../common/useAudio.hook';

import { Constants } from '../../constants/constants';

export const usePetCard = (id, mood, moodIncreasing, config) => {
    const { setMoodLevel } = useOwnerStore();
    const [playSound] = useAudio();

    const onSwipe = (direction, { dx, dy }) => {
        const returnedDirection = getDirection(direction, dx, dy);
        playSound('purring');

        switch (returnedDirection) {
            case 'SWIPE_UP':
                setMoodLevel(
                    id,
                    mood >= Constants.MAX_MOOD_LEVEL
                        ? Constants.MAX_MOOD_LEVEL
                        : mood + moodIncreasing.up
                );
                break;
            case 'SWIPE_DOWN':
                setMoodLevel(
                    id,
                    mood >= Constants.MAX_MOOD_LEVEL
                        ? Constants.MAX_MOOD_LEVEL
                        : mood + moodIncreasing.down
                );
                break;
            case 'SWIPE_LEFT':
                setMoodLevel(
                    id,
                    mood >= Constants.MAX_MOOD_LEVEL
                        ? Constants.MAX_MOOD_LEVEL
                        : mood + moodIncreasing.left
                );
                break;
            case 'SWIPE_RIGHT':
                setMoodLevel(
                    id,
                    mood >= Constants.MAX_MOOD_LEVEL
                        ? Constants.MAX_MOOD_LEVEL
                        : mood + moodIncreasing.right
                );
                break;
            case 'SWIPE_DIAGONAL':
                setMoodLevel(
                    id,
                    mood >= Constants.MAX_MOOD_LEVEL
                        ? Constants.MAX_MOOD_LEVEL
                        : mood + moodIncreasing.diagonal
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
