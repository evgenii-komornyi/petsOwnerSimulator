import { useEffect, useState } from 'react';

export const usePet = (stats, img) => {
    const [isBlinking, setIsBlinking] = useState(false);
    const [blinkImage, setBlinkImage] = useState(null);
    const [randomInterval, setRandomInterval] = useState(
        (Math.random() * 0.9 + 0.1).toFixed(1)
    );

    const toggleBlink = () => {
        if (stats.health > 0) {
            setIsBlinking(true);
        }
        setTimeout(() => {
            setIsBlinking(false);
            setRandomInterval((Math.random() * 0.9 + 0.1).toFixed(1));
        }, 150);
    };

    useEffect(() => {
        const intervalId = setInterval(toggleBlink, randomInterval * 60 * 1000);

        return () => clearInterval(intervalId);
    }, [randomInterval]);

    useEffect(() => {
        if (isBlinking) {
            setBlinkImage(img.blinking);
        } else {
            setBlinkImage(null);
        }
    }, [isBlinking]);

    return { blinkImage };
};
