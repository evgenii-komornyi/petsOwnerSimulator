import React from 'react';
import AnimatedLoader from 'react-native-animated-loader';
import useHolidayStore from '../../app/useHolidayStore';

import { loaders } from '../../data/loaders';

import { styles } from './loader.styles';

export const Loader = ({ sourceFile }) => {
    const { holiday } = useHolidayStore(state => state);

    return (
        <AnimatedLoader
            visible={true}
            source={holiday ? loaders[holiday] : sourceFile}
            overlayColor="rgba(255,255,255,0.75)"
            animationStyle={styles.lottie}
            speed={1}
        />
    );
};
