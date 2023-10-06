import React from 'react';
import { View } from 'react-native';
import { CustomText } from '../custom-text/custom-text.component';

import { styles } from './pets.styles';

export const GameOverWithoutUsingAvailablePets = () => {
    return (
        <View style={styles.textContainer}>
            <CustomText
                text="Game over! You can adopt more pets to continue the game!"
                style={styles.gameOverText}
            />
        </View>
    );
};
