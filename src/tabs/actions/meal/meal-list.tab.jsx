import React from 'react';
import { View } from 'react-native';

import { FeedButton } from '../../../components/pressable-button/feed-button.component';
import { EmptyList } from '../../../components/empy-list/empty-list.component';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './meal-list.styles';

export const MealList = ({ id }) => {
    const { food } = useOwnerStore(state => state.inventory);

    return (
        <View style={styles.container}>
            {!food.every(item => item.count === 0) ? (
                food.map((item, index) => (
                    <View key={item.id}>
                        <FeedButton
                            catId={id}
                            item={item}
                            index={index}
                            actionType="feed"
                        />
                    </View>
                ))
            ) : (
                <EmptyList text="You do not have any food. Buy some food!" />
            )}
        </View>
    );
};
