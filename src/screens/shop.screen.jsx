import React from 'react';
import { View } from 'react-native';

import { ShopList } from '../components/shop/shop-list/shop-list.component';

import { useOnBackPress } from '../hooks/common/useOnBackPress.hook';
import { styles } from '../styles/global.styles';

export const ShopScreen = () => {
    useOnBackPress();

    return (
        <View style={styles.container}>
            <ShopList />
        </View>
    );
};
