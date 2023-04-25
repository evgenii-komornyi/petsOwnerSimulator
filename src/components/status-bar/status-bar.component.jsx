import React from 'react';
import { Header } from '@rneui/themed';

import HappyPetCoins from './happy-pet-coins.component';
import { styles } from './status-bar.styles';

export const StatusBar = () => {
    return (
        <Header
            containerStyle={styles.statusBarContainer}
            leftComponent={<HappyPetCoins />}
        />
    );
};
