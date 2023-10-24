import { useState } from 'react';

export const useHolidayAnimation = animation => {
    const [isAnimationPlay, setIsAnimationPlay] = useState(false);

    const playAnimation = () => {
        if (!animation || isAnimationPlay) {
            return;
        }
        setIsAnimationPlay(true);

        setTimeout(() => {
            setIsAnimationPlay(false);
        }, 3000);
    };

    return { isAnimationPlay, playAnimation };
};
