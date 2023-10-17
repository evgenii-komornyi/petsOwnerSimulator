import React from 'react';
import { Pressable } from 'react-native';

export const PressableButton = ({ onPress, styles, children }) => {
    return (
        <Pressable onPress={onPress} style={styles}>
            {children}
        </Pressable>
    );
};
