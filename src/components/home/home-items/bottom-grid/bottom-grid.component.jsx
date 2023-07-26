import React from 'react';
import { View } from 'react-native';

import { CatHouse } from './cat-house/cat-house.component';
import { LitterBox } from './litter-box/litter-box.component';

import useOwnerStore from '../../../../app/useOwnerStore';

import { isObjectExists } from '../../../../helpers/objects.helper';

import { styles } from './bottom-grid.styles';

export const BottomGrid = () => {
    const { litterBox, catHouse } = useOwnerStore(state => state.inventory);

    return (
        <View style={styles.bottomGridContainer}>
            <View style={styles.catHouseContainer}>
                {isObjectExists(catHouse) && <CatHouse />}
            </View>
            <View style={styles.litterBoxContainer}>
                {isObjectExists(litterBox) && <LitterBox />}
            </View>
        </View>
    );
};
