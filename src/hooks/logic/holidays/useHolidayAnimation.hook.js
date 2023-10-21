import { useState } from 'react';

export const useHolidayAnimation = () => {
    const [isAnimationPlay, setIsAnimationPlay] = useState(false);

    const playAnimation = animation => {
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
