import React from 'react';
import { View, FlatList } from 'react-native';

import { shopItems } from '../../../helpers/shop-items';
import { ShopItems } from './shop-items.component';

import { styles } from './shop-list.styles';

export const ShopList = () => {
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
