import { useState } from 'react';
import useSettingsStore from '../../../app/useSettingsStore';

const keys = {
    letters: { topKeys: ['x', 'y', 'z'], bottomKeys: ['a', 'b', 'c'] },
    controls: ['start', 'reset'],
    arrows: { topKeys: ['', 'up', ''], bottomKeys: ['left', 'down', 'right'] },
};

const correctCombination = 'xcabczxabcz';

export const useSpeedControl = () => {
    const {
        intervalTime,
        setIntervalTime,
        intervalId,
        setIntervalId,
        setIsCorrectCombination,
    } = useSettingsStore(state => state);
    const isButtonDisabled = valueToDisableButton =>
        intervalTime === valueToDisableButton;

    const checkValueToReturnCorrectIcon = valueToCheck =>
        intervalTime !== valueToCheck ? 'rewind' : 'fast-forward';

    const onPressHandler = value => {
        setIntervalTime(value);
        setIntervalId(0);
        clearInterval(intervalId);
    };

    const [pressedCombination, setPressedCombination] = useState('');

    const onPressKeyHandler = key => {
        setPressedCombination(prevState => prevState + key);
    };

    const checkAndApplyCode = () => {
        setIsCorrectCombination(pressedCombination === correctCombination);
        setPressedCombination('');
    };

    const resetPressedCombination = () => {
        setPressedCombination('');
    };

    return {
        keys,
        onPressKeyHandler,
        checkAndApplyCode,
        isButtonDisabled,
        checkValueToReturnCorrectIcon,
        onPressHandler,
        resetPressedCombination,
    };
};
