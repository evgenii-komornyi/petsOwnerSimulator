import React from 'react';
import { View } from 'react-native';

import { LetterButtons } from './letter-buttons.component';
import { ControlButtons } from './control-buttons.component';

import { useSpeedControl } from '../../../../../hooks/logic/settings/useSpeedControl.hook';

import { styles } from './joystick.styles';

export const Joystick = () => {
    const {
        keys,
        onPressKeyHandler,
        checkAndApplyCode,
        resetPressedCombination,
    } = useSpeedControl();

    return (
        <View style={styles.controllerContainer}>
            <LetterButtons keys={keys} onPressKeyHandler={onPressKeyHandler} />
            <ControlButtons
                keys={keys}
                checkAndApplyCode={checkAndApplyCode}
                resetPressedCombination={resetPressedCombination}
            />
        </View>
    );
};
