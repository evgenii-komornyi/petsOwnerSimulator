import React from 'react';
import { View } from 'react-native';

import { FeedButton } from '../../../components/pressable-button/feed-button.component';
import { EmptyList } from '../../../components/empy-list/empty-list.component';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './play-list.styles';

export const PlayList = () => {
    const { toys } = useOwnerStore(state => state.inventory);

    return (
        <View style={styles.container}>
            {!toys.every(item => item.count === 0) ? (
                toys.map((item, index) => (
                    <View key={item.id}>
                        <FeedButton
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
