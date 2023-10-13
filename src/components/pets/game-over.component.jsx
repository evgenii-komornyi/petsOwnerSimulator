import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';

import { CustomText } from '../custom-text/custom-text.component';
import { Icon } from '../icon/icon.component';

import { Constants } from '../../constants/constants';

import { styles } from './pets.styles';
import useOwnerStore from '../../app/useOwnerStore';

export const GameOver = () => {
    const { resetGame, loadGame } = useOwnerStore(state => state);

    const reset = async () => {
        resetGame();

        setTimeout(() => {
            loadGame();
        }, 2000);
    };

    return (
        <View style={styles.textContainer}>
            <CustomText text="Game Over" style={styles.gameOverText} />
            <Button
                title="Restart a Game"
                buttonStyle={styles.button}
                titleStyle={styles.title}
                icon={
                    <Icon
                        type={Constants.SIMPLELINESICONS_ICON}
                        icon="refresh"
                        size={30}
                        color="white"
                    />
                }
                onPress={reset}
            />
        </View>
    );
};
