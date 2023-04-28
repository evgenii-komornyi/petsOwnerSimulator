import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Pet } from './pet.component';

const { width: viewportWidth } = Dimensions.get('window');

export const Pets = ({ animals }) => {
    const [carouselScrollEnabled, setCarouselScrollEnabled] = useState(true);

    const handleScrollViewScroll = () => {
        setCarouselScrollEnabled(false);
    };

    const handleCarouselMomentumScrollEnd = () => {
        setCarouselScrollEnabled(true);
    };

    return (
        <Carousel
            data={animals}
            renderItem={item => (
                <Pet
                    item={item}
                    scroll={handleScrollViewScroll}
                    scrollEnd={handleCarouselMomentumScrollEnd}
                />
            )}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth - 60}
            loop={true}
            autoplay={false}
            scrollEnabled={carouselScrollEnabled}
            layout="tinder"
        />
    );
};
