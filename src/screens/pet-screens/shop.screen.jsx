import React, { useEffect } from 'react';
import { View } from 'react-native';

import { ShopList } from '../../components/shop/shop-list/shop-list.component';

import { Loader } from '../../components/loader/loader.component';

import { loaders } from '../../data/loaders';

import useShopStore from '../../app/useShopStore';

import { useOnBackPress } from '../../hooks/common/useOnBackPress.hook';

import { styles } from '../../styles/global.styles';

export const ShopScreen = () => {
    useOnBackPress();
    const { isLoaded, loadShop } = useShopStore(state => state);

    useEffect(() => {
        loadShop();
    }, []);

    return (
        <View style={styles.container}>
            {isLoaded ? <ShopList /> : <Loader sourceFile={loaders.loading} />}
        </View>
    );
};
