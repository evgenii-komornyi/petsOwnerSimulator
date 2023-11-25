import React from 'react';
import { View } from 'react-native';

import { Pets } from '../../components/pets/pets.component';

import { useOnBackPress } from '../../hooks/common/useOnBackPress.hook';

import { styles } from '../../styles/global.styles';

export const PetsScreen = () => {
    useOnBackPress();

    return (
        <View style={styles.container}>
            <Pets />
        </View>
    );
};
