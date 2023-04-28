import React from 'react';
import { View } from 'react-native';

import { useOnBackPress } from '../hooks/common/useOnBackPress.hook';

import { Carousel } from '../components/carousel/carousel.component';

import { styles } from '../styles/global.styles';

export const CarouselScreen = () => {
    useOnBackPress();

    return (
        <View style={styles.container}>
            <Carousel />
        </View>
    );
};
