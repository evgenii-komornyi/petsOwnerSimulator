import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { Pet } from './pet.component';
import { View } from 'react-native';

const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get('window');

export const Pets = ({ animals, type }) => {
    const baseOptions = {
        vertical: false,
        width: viewportWidth * 0.8,
        height: Math.max(320, viewportHeight / 2),
    };

    return (
        <View style={{ alignItems: 'center' }}>
            <Carousel
                {...baseOptions}
                loop
                withAnimation={{
                    type: 'spring',
                    config: {
                        damping: 13,
                    },
                }}
                data={animals}
                mode="horizontal-stack"
                modeConfig={{ snapDirection: 'left', stackInterval: 18 }}
                panGestureHandlerProps={{ activeOffsetX: [-50, 50] }}
                renderItem={item => <Pet item={item} type={type} />}
            />
        </View>
    );
};
