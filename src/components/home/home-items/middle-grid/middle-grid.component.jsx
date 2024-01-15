import React from 'react';

import { Window } from './window/window.component';
import { Carpet } from './carpet/carpet.component';

export const MiddleGrid = () => {
    return (
        <>
            {/* <View style={styles.middleGridContainer}> */}
            {/* <View style={styles.windowContainer}> */}
            <Window />
            {/* </View> */}
            {/* <View style={styles.carpetContainer}> */}
            <Carpet />
            {/* </View> */}
            {/* </View> */}
        </>
    );
};
