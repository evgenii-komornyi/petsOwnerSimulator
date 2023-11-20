import { useRef, useState } from 'react';
import { Animated } from 'react-native';

export const useToggleActions = ({ height }, health = undefined) => {
    const [isVisible, setIsVisible] = useState(false);
    const heightAnim = useRef(new Animated.Value(0)).current;

    const toggleVisibility = () => {
        if (health !== undefined) {
            if (health === 0) return;
        }

        setIsVisible(prev => !prev);

        Animated.timing(heightAnim, {
            toValue: isVisible ? 0 : height,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const animatedHeight = heightAnim.interpolate({
        inputRange: [0, height],
        outputRange: [0, height],
    });

    return [isVisible, toggleVisibility, animatedHeight];
};
