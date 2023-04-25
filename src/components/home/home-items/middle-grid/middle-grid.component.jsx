import React from 'react';
import { View } from 'react-native';

import { Window } from './window/window.component';
import { Carpet } from './carpet/carpet.component';
import { Door } from './door/door.component';

import { styles } from './middle-grid.styles';

export const MiddleGrid = () => {
    return (
        <View style={styles.middleGridContainer}>
            <View style={styles.windowContainer}>
                <Window />
            </View>
            <View style={styles.carpetContainer}>
                <Carpet />
            </View>
            <View style={styles.doorContainer}>
                <Door />
            </View>
        </View>
    );
};
