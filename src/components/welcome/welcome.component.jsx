import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import { WelcomeItem } from './welcome-item.component';

import { styles } from './welcome.styles';
import useSettingsStore from '../../app/useSettingsStore';

const welcomeCard = [
    {
        id: 0,
        title: 'asset:/images/welcome-text.gif',
        description:
            'Any time you can open help, tapping on the top right corner icon with question mark.',
        animation: 'asset:/animation/help.gif',
    },
];

export const Welcome = () => {
    const { setIsFirstRun } = useSettingsStore(state => state);

    const onSwipedAllHandler = () => {
        setIsFirstRun();
    };

    return (
        <View style={styles.container}>
            <Swiper
                cards={welcomeCard}
                renderCard={card => <WelcomeItem item={card} />}
                onSwipedAll={onSwipedAllHandler}
                cardIndex={0}
                backgroundColor={'#4FD0E9'}
                stackSize={3}
                cardVerticalMargin={80}
                marginBottom={60}
                marginTop={60}
            />
        </View>
    );
};
