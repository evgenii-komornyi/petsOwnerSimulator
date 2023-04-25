import React from 'react';
import { ImageBackground, View } from 'react-native';

import { styles } from './table.styles';

const table = { uri: 'asset:/images/home-items/table.png' };

export const Table = () => {
    return (
        <View style={styles.tableContainer}>
            <ImageBackground
                resizeMode="contain"
                source={table}
                style={styles.tableImage}
            ></ImageBackground>
        </View>
    );
};
