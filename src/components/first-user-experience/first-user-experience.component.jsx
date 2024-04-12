import React from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import { HelpItem } from './help-item.component';

import { styles } from './first-user-experience.styles';

export const FirstUserExperience = ({
    collection,
    resetFilteredHelp = undefined,
    handleTouchEnd = undefined,
}) => {
    const closeAllCards = () => {
        if (resetFilteredHelp) resetFilteredHelp();
        if (handleTouchEnd) handleTouchEnd();
    };

    return (
        <View style={styles.container}>
            <Swiper
                cards={collection}
                renderCard={card => (
                    <HelpItem item={card} closeAllCards={closeAllCards} />
                )}
                onSwipedAll={closeAllCards}
                cardIndex={0}
                backgroundColor={'#4FD0E9'}
                stackSize={3}
                cardVerticalMargin={80}
                // marginBottom={60}
                // marginTop={60}
            />
        </View>
    );
};
