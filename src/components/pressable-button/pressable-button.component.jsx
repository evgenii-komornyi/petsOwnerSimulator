import React from 'react';
import { Pressable } from 'react-native';

export const PressableButton = ({
    onPress,
    styles,
    children,
    disabled = false,
}) => {
    return (
        <Pressable onPress={onPress} style={styles} disabled={disabled}>
            {children}
        </Pressable>
    );
};
