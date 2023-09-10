import React, { Fragment } from 'react';
import { View } from 'react-native';

import { FoodButton } from '../../../components/pressable-button/food-button.component';
import { EmptyList } from '../../../components/empy-list/empty-list.component';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './meal-list.styles';

export const MealList = ({ id }) => {
    const { food } = useOwnerStore(state => state.inventory);

    return (
        <View style={styles.container}>
            {!food.every(item => item.count === 0) ? (
                food.map((item, index) => (
                    <Fragment key={item.id}>
                        <FoodButton
                            catId={id}
                            item={item}
                            index={index}
                            actionType="feed"
                        />
                    </Fragment>
                ))
            ) : (
                <EmptyList text="You do not have any food. Buy some food!" />
            )}
        </View>
    );
};
