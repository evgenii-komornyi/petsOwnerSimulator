import React, { Fragment } from 'react';
import { View } from 'react-native';

import { FoodButton } from '../../../components/pressable-button/food-button.component';
import { EmptyList } from '../../../components/empty-list/empty-list.component';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './meal-list.styles';

export const MealList = ({ petId }) => {
    const { food } = useOwnerStore(state => state.inventory);

    return (
        <View style={styles.container}>
            {food.length > 0 ? (
                food.map((item, index) => (
                    <Fragment key={item.id}>
                        <FoodButton petId={petId} item={item} index={index} />
                    </Fragment>
                ))
            ) : (
                <EmptyList text="You do not have any food. Buy some food!" />
            )}
        </View>
    );
};
