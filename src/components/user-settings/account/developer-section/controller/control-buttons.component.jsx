import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { CustomText } from '../../../../custom-text/custom-text.component';

import { styles } from './joystick.styles';

export const ControlButtons = ({
    keys: { controls },
    checkAndApplyCode,
    resetPressedCombination,
}) => {
    return (
        <View style={styles.controlsContainer}>
            {controls.map((key, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.startButton}
                    onPress={
                        key === 'start'
                            ? checkAndApplyCode
                            : resetPressedCombination
                    }
                >
                    <CustomText
                        text={key.toUpperCase()}
                        style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            letterSpacing: 5,
                            color: 'white',
                        }}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};
