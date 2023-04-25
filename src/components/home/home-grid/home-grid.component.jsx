import React from 'react';
import { View } from 'react-native';

import { BottomGrid } from '../home-items/bottom-grid/bottom-grid.component';
import { MiddleGrid } from '../home-items/middle-grid/middle-grid.component';
import { TopGrid } from '../home-items/top-grid/top-grid.component';
import { HomeImage } from './home-image.component';

import { styles } from './home-grid.styles';

export const HomeGrid = () => {
    return (
        <View style={styles.mainContainer}>
            <HomeImage>
                <View style={styles.itemsContainer}>
                    <TopGrid />
                    <MiddleGrid />
                    <BottomGrid />
                </View>
            </HomeImage>
        </View>
    );
};
