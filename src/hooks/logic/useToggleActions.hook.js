import { useRef, useState } from 'react';
import { Animated } from 'react-native';

export const useToggleActions = health => {
    const [isVisible, setIsVisible] = useState(false);
    const heightAnim = useRef(new Animated.Value(0)).current;

    const toggleVisibility = () => {
        if (health === 0) return;

        setIsVisible(prev => !prev);

        Animated.timing(heightAnim, {
            toValue: isVisible ? 0 : 130,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const animatedHeight = heightAnim.interpolate({
        inputRange: [0, 130],
        outputRange: [0, 130],
    });

    return [isVisible, toggleVisibility, animatedHeight];
};
