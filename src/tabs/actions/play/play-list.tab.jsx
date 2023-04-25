import React from 'react';
import { View } from 'react-native';

import { PressableButton } from '../../../components/pressable-button/pressable-button.component';
import { EmptyList } from '../../../components/empy-list/empty-list.component';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './play-list.styles';

export const PlayList = () => {
    const { toys } = useOwnerStore();

    return (
        <View style={styles.container}>
            {!toys.every(item => item.count === 0) ? (
                toys.map((item, index) => (
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
                <EmptyList text="You do not have any toys. Buy some toys!" />
            )}
        </View>
    );
};
