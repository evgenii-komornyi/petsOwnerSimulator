import React from 'react';
import { View, ImageBackground } from 'react-native';

import { Sofa } from './sofa/sofa.component';

import useOwnerStore from '../../../../app/useOwnerStore';
import { styles } from './top-grid.styles.jsx';
import { Constants } from '../../../../constants/constants';
import { WaterBowl } from './bowl/water-bowl.component.jsx';

export const TopGrid = () => {
    return (
        <>
            {/* <View style={styles.topGridContainer}> */}
            {/* <View style={styles.sofaContainer}> */}
            <Sofa />
            <WaterBowl />
            {/* </View> */}
            {/* <View style={styles.tableContainer}> */}
            {/* <Table /> */}
            {/* </View> */}
            {/* </View> */}
        </>
    );
};
