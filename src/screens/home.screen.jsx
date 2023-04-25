import React from 'react';
import { View } from 'react-native';

import { Home } from '../components/home/home.component';

import { useOnBackPress } from '../hooks/common/useOnBackPress.hook';

import { styles } from '../styles/global.styles';

export const HomeScreen = () => {
    useOnBackPress();

    return (
        <View style={styles.container}>
            <Home />
        </View>
    );
};
