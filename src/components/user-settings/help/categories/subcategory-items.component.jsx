import React from 'react';
import { FlatList } from 'react-native';

import { CustomAccordion } from '../../../custom-accordion/custom-accordion.component';
import { Item } from './item.component';

import { styles } from '../help.styles';

export const SubCategoryItems = ({
    item: {
        id: subId,
        category: subCategory,
        isButton: subIsButton,
        items: subItems,
    },
    disableScroll,
}) => {
    return (
        <CustomAccordion
            title={subCategory}
            id={subId}
            isButton={subIsButton}
            disableScroll={disableScroll}
        >
            <FlatList
                data={subItems}
                renderItem={({ item }) => (
                    <Item disableScroll={disableScroll} item={item} />
                )}
                keyExtractor={(_, index) => index}
                numColumns={1}
                contentContainerStyle={styles.contentContainer}
            />
        </CustomAccordion>
    );
};
