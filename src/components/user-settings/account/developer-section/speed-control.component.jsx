import React from 'react';

import useSettingsStore from '../../../../app/useSettingsStore';

import { SpeedButtons } from './speed-buttons.component';
import { Joystick } from './controller/joystick.component';

export const SpeedControl = () => {
    const { isCorrectCombination } = useSettingsStore(state => state);

    return isCorrectCombination ? <SpeedButtons /> : <Joystick />;
};
