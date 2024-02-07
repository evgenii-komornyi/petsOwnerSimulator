import React from 'react';
import { View, Image } from 'react-native';

import { ItemDescription } from './description/item-description.component';
import { BuyButton } from './buttons/buy-button.component';

import { styles } from './shop-list.styles';
import { CustomText } from '../../custom-text/custom-text.component';

export const ShopItem = ({ item }) => {
    return (
        <View style={styles.itemContainerStyle}>
            <View style={styles.itemNameContainer}>
                <CustomText text={item.name} style={styles.itemName} />
            </View>
            <View style={styles.itemWrapper}>
                <View style={styles.itemImageContainer}>
                    <Image
                        source={{
                            uri: item.image.shopImage,
                        }}
                        style={styles.itemImage}
                    />
                </View>
                <ItemDescription item={item} />
            </View>
            <BuyButton item={item} />
        </View>
    );
};
