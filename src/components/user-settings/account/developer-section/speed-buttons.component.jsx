import React from 'react';
import { View } from 'react-native';
import { PressableButton } from '../../../pressable-button/pressable-button.component';
import { Icon } from '../../../icon/icon.component';

import { useSpeedControl } from '../../../../hooks/logic/settings/useSpeedControl.hook';

import { Constants } from '../../../../constants/constants';

import { styles } from './developer-section.styles';

const buttons = [{ value: 60 }, { value: 30 }, { value: 10 }, { value: 1 }];

export const SpeedButtons = () => {
    const { isButtonDisabled, checkValueToReturnCorrectIcon, onPressHandler } =
        useSpeedControl();

    return (
        <View style={styles.speedButtonsContainer}>
            {buttons.map(({ value }, index) => (
                <PressableButton
                    key={index}
                    styles={[
                        styles.speedButton,
                        isButtonDisabled(value)
                            ? styles.disabledSpeedButton
                            : null,
                    ]}
                    disabled={isButtonDisabled(value)}
                    onPress={() => onPressHandler(value)}
                >
                    <Icon
                        type={Constants.MATERIALCOMMUNITYICONS_ICON}
                        icon={`${
                            value !== 1
                                ? checkValueToReturnCorrectIcon(value)
                                : 'numeric'
                        }-${value}`}
                        size={25}
                        color={isButtonDisabled(value) ? '#999' : 'black'}
                    />
                </PressableButton>
            ))}
        </View>
    );
};
