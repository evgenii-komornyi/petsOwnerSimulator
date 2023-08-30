import React from 'react';
import FlipCard from 'react-native-flip-card';

import { FrontSide } from './sides/front-side.component';
import { BackSide } from './sides/back-side.component';

import { styles } from './carousel.styles';

export const Pet = ({ item: { item }, type, scroll, scrollEnd }) => {
    return (
        <FlipCard
            style={styles.card}
            friction={10}
            perspective={1000}
            flipVertical={true}
        >
            <FrontSide item={item} type={type} />
            <BackSide item={item} scroll={scroll} scrollEnd={scrollEnd} />
        </FlipCard>
    );
};
