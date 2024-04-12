import React from 'react';
import { View } from 'react-native';

import Swiper from 'react-native-deck-swiper';

export const SwiperCards = ({
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
                marginBottom={60}
                marginTop={60}
            />
        </View>
    );
};
