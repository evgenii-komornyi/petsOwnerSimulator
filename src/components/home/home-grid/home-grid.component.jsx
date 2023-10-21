import React from 'react';
import { View } from 'react-native';

import { BottomGrid } from '../home-items/bottom-grid/bottom-grid.component';
import { MiddleGrid } from '../home-items/middle-grid/middle-grid.component';
import { TopGrid } from '../home-items/top-grid/top-grid.component';
import { HomeImage } from './home-image.component';
import { Holiday } from '../../holiday/holiday.component';

import useHolidayStore from '../../../app/useHolidayStore';

import { styles } from './home-grid.styles';
import { styles as holidayStyles } from '../../holiday/holiday.styles';

export const HomeGrid = () => {
    const { decorations } = useHolidayStore(state => state);

    return (
        <View style={styles.mainContainer}>
            <HomeImage>
                {decorations.length ? (
                    <Holiday
                        imageUri={decorations[0].uri}
                        animation={decorations[0].animation}
                        containerStyles={[
                            holidayStyles.holidayDecor,
                            { top: '45%', right: '15%' },
                        ]}
                        imageStyles={[holidayStyles.decorImage]}
                    />
                ) : null}
                <View style={styles.itemsContainer}>
                    <TopGrid />
                    <MiddleGrid />
                    <BottomGrid />
                </View>
            </HomeImage>
        </View>
    );
};
