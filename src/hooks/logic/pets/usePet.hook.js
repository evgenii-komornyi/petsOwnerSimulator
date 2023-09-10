import { useEffect, useState } from 'react';

export const usePet = (stats, img) => {
    const [isBlinking, setIsBlinking] = useState(false);
    const [currentImg, setCurrentImg] = useState(img.regular);
    const [randomInterval, setRandomInterval] = useState(
        (Math.random() * 0.9 + 0.1).toFixed(1)
    );

    const toggleBlink = () => {
        if (stats.mood !== 0) {
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
            setCurrentImg(img.sleeping);
        } else {
            setCurrentImg(checkStatsToReturnCorrectImage());
        }
    }, [isBlinking, img]);

    const checkStatsToReturnCorrectImage = () => {
        if (stats.health === 0) {
            return img.dead;
        }

        if (stats.mood === 0) {
            return img.sad;
        }

        return img.regular;
    };

    return { currentImg };
};
