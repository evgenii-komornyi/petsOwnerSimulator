import React, { useState, useRef, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

export const DoubleTap = ({ delay = 150, singleTap, doubleTap, children }) => {
    const [firstPress, setFirstPress] = useState(true);
    const [lastTime, setLastTime] = useState(new Date());
    const timerRef = useRef(null);

    const onTap = () => {
        const now = new Date().getTime();

        if (firstPress) {
            setFirstPress(false);
            setLastTime(now);
            timerRef.current = setTimeout(() => {
                singleTap && singleTap();
                setFirstPress(true);
                timerRef.current = null;
            }, delay);
        } else {
            if (now - lastTime < delay) {
                timerRef.current && clearTimeout(timerRef.current);
                doubleTap && doubleTap();
                setFirstPress(true);
            }
        }
    };

    useEffect(() => {
        return () => {
            timerRef.current && clearTimeout(timerRef.current);
        };
    }, []);

    return <TouchableOpacity onPress={onTap}>{children}</TouchableOpacity>;
};
