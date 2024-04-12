import React from 'react';
import { FlatList, View } from 'react-native';

import { CategoryItems } from './categories/category-items.component';

import { helpCategories } from '../../../data/help';

import { styles } from './help.styles';

export const Help = ({ scrollEnabled, disableScroll }) => {
    return (
        <View style={styles.wrapperContainer}>
            <FlatList
                scrollEnabled={scrollEnabled}
                data={helpCategories}
                renderItem={({ item }) => (
                    <CategoryItems disableScroll={disableScroll} item={item} />
                )}
                keyExtractor={item => item.id}
                numColumns={1}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    );
};
