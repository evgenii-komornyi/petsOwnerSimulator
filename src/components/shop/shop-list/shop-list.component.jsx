import React from 'react';
import { View, FlatList } from 'react-native';

import { ShopItems } from './shop-items.component';

import useShopStore from '../../../app/useShopStore';

import { styles } from './shop-list.styles';

export const ShopList = () => {
    const { shopItems } = useShopStore(state => state.shop);

    return (
        <View style={styles.wrapperContainer}>
            <FlatList
                data={shopItems}
                renderItem={({ item }) => <ShopItems item={item} />}
                keyExtractor={item => item.title}
                numColumns={1}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    );
};
