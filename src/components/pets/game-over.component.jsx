import React from 'react';
import { View } from 'react-native';

import { CustomText } from '../custom-text/custom-text.component';

import { styles } from './pets.styles';

export const GameOver = () => {
    return (
        <View style={styles.textContainer}>
            <CustomText text="Game Over" style={styles.gameOverText} />
        </View>
    );
};
