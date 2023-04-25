import React from 'react';
import { View } from 'react-native';

import { PressableButton } from '../../../components/pressable-button/pressable-button.component';
import { EmptyList } from '../../../components/empy-list/empty-list.component';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './meal-list.styles';

export const MealList = ({ id, currentFoodLevel, currentDigestionLevel }) => {
    const { food } = useOwnerStore();

    return (
        <View style={styles.container}>
            {!food.every(item => item.count === 0) ? (
                food.map((item, index) => (
                    <View key={item.id}>
                        <PressableButton
                            catId={id}
                            item={item}
                            currentFoodLevel={currentFoodLevel}
                            currentDigestionLevel={currentDigestionLevel}
                            index={index}
                        />
                    </View>
                ))
            ) : (
                <EmptyList text="You do not have any food. Buy some food!" />
            )}
        </View>
    );
};
