import React from 'react';
import { View, FlatList } from 'react-native';

import { CustomText } from '../../custom-text/custom-text.component';

import { ShopItem } from './shop-item.component';

import { styles } from './shop-list.styles';

export const ShopItems = ({ item }) => {
    const parentItemCategory = item.title;

    return (
        <View style={styles.categoryContainer}>
            <View style={styles.categoryNameContainer}>
                <CustomText
                    text={parentItemCategory}
                    style={styles.categoryName}
                />
            </View>
            <FlatList
                data={item.items}
                renderItem={({ item }) => <ShopItem item={item} />}
                horizontal
                keyExtractor={item => item.id}
            />
        </View>
    );
};
