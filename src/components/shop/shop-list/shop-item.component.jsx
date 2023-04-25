import React from 'react';
import { View, Image } from 'react-native';

import { ItemDescription } from './description/item-description.component';
import { BuyButton } from './buttons/buy-button.component';

import { styles } from './shop-list.styles';

export const ShopItem = ({ item, category }) => {
    return (
        <View style={styles.itemContainerStyle}>
            <View style={styles.itemWrapper}>
                <View style={styles.itemImageContainer}>
                    <Image source={item.image.new} style={styles.itemImage} />
                </View>
                <ItemDescription item={item} />
            </View>
            <BuyButton item={item} category={category} />
        </View>
    );
};
