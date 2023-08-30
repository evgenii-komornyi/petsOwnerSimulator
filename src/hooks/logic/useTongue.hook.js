import { useState, useEffect } from 'react';
import useTongueStore from '../../app/useTongueStore';

import { Constants } from '../../constants/constants';

const tongueImages = [
    `${Constants.ASSETS_TONGUE_FOLDER}/lick1.png`,
    `${Constants.ASSETS_TONGUE_FOLDER}/lick2.png`,
    `${Constants.ASSETS_TONGUE_FOLDER}/lick3.png`,
    `${Constants.ASSETS_TONGUE_FOLDER}/lick4.png`,
];

let animationIntervalId;

export const useTongue = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const { isTongueVisible } = useTongueStore(state => state);

    useEffect(() => {
        if (isTongueVisible) {
            animationIntervalId = setInterval(() => {
                setImageIndex(
                    prevIndex => (prevIndex + 1) % tongueImages.length
                );
            }, 150);
        }

        return () => clearInterval(animationIntervalId);
    }, [isTongueVisible, imageIndex]);

    return [imageIndex, isTongueVisible, tongueImages];
};
