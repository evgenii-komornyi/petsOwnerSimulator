import React, { useRef } from 'react';
import { FlatList, View } from 'react-native';

import useOwnerStore from '../../app/useOwnerStore';

import { Pet } from './pet.component';

import { styles } from './pets.styles';
import { CustomText } from '../custom-text/custom-text.component';

export const Pets = () => {
    const { pets } = useOwnerStore();
    const flatListRef = useRef(null);

    const handleTouchStart = () => {
        flatListRef.current.setNativeProps({
            scrollEnabled: false,
        });
    };

    const handleTouchEnd = () => {
        flatListRef.current.setNativeProps({
            scrollEnabled: true,
        });
    };

    return (
        <View style={styles.wrapperContainer}>
            {pets.length === 0 && <CustomText text="Adopt your first pet!" />}
            <FlatList
                ref={flatListRef}
                data={pets}
                renderItem={({ item }) => (
                    <Pet
                        item={item}
                        touchStart={handleTouchStart}
                        touchEnd={handleTouchEnd}
                    />
                )}
                keyExtractor={(_, index) => index}
                key={item => item.id}
                numColumns={1}
                contentContainerStyle={{
                    marginTop: 2,
                    paddingVertical: 10,
                    marginBottom: '30%',
                }}
            />
        </View>
    );
};
