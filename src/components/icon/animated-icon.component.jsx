import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

import { styles } from './icon.styles';

export const AnimatedIcon = ({ isPlay, source, isLoop }) => {
    return (
        <View style={styles.container}>
            <Lottie source={source} autoPlay={isPlay} loop={isLoop} />
        </View>
    );
};
