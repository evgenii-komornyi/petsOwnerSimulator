import React from 'react';
import { View } from 'react-native';

import { PressableButton } from '../../../components/pressable-button/pressable-button.component';
import { EmptyList } from '../../../components/empy-list/empty-list.component';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './meal-list.styles';

export const MealList = ({
    id,
    currentSatietyLevel,
    currentDigestionLevel,
}) => {
    const { food } = useOwnerStore(state => state);

    return (
        <View style={styles.container}>
            {!food.every(item => item.count === 0) ? (
                food.map((item, index) => (
                    <View key={item.id}>
                        <PressableButton
                            catId={id}
                            item={item}
                            currentSatietyLevel={currentSatietyLevel}
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
