import React from 'react';
import { FlatList } from 'react-native';

import { CustomAccordion } from '../../../custom-accordion/custom-accordion.component';
import { SubCategoryItems } from './subcategory-items.component';

import { styles } from '../help.styles';

export const CategoryItems = ({
    item: { id, category, isButton, items },
    disableScroll,
}) => {
    return (
        <CustomAccordion
            title={category}
            id={id}
            isButton={isButton}
            disableScroll={disableScroll}
        >
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <SubCategoryItems
                        disableScroll={disableScroll}
                        item={item}
                    />
                )}
                keyExtractor={item => item.id}
                numColumns={1}
                contentContainerStyle={styles.contentContainer}
            />
        </CustomAccordion>
    );
};
