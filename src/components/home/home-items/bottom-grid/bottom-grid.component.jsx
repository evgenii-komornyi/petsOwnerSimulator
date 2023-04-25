import React from 'react';
import { View } from 'react-native';

import { CatHouse } from './cat-house/cat-house.component';
import { Litter } from './litter/litter.component';

import { styles } from './bottom-grid.styles';
import useOwnerStore from '../../../../app/useOwnerStore';

export const BottomGrid = () => {
    const { litterBox, catHouse } = useOwnerStore();

    return (
        <View style={styles.bottomGridContainer}>
            <View style={styles.catHouseContainer}>
                {Object.keys(catHouse).length !== 0 && <CatHouse />}
            </View>
            <View style={styles.litterContainer}>
                {Object.keys(litterBox).length !== 0 && <Litter />}
            </View>
        </View>
    );
};
