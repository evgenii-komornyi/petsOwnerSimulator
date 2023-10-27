import React from 'react';
import { Pressable, View } from 'react-native';
import FlipCard from 'react-native-flip-card';

import { FrontSide } from './sides/front-side.component';
import { BackSide } from './sides/back-side.component';
import { Icon } from '../icon/icon.component';

import { Constants } from '../../constants/constants';

import { useFlip } from '../../hooks/logic/shelter/useFlip.hook';

import { styles } from './carousel.styles';

export const Pet = ({ item: { item }, type }) => {
    const { isFlipped, flip } = useFlip();

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
            }}
        >
            <FlipCard
                style={styles.card}
                friction={10}
                perspective={1000}
                flipVertical={true}
                flip={isFlipped}
                clickable={false}
            >
                <FrontSide item={item} type={type} />
                <BackSide item={item} />
            </FlipCard>
            <Pressable
                style={[
                    styles.flipIconContainer,
                    {
                        transform: [
                            { rotate: !isFlipped ? '-90deg' : '90deg' },
                        ],
                    },
                ]}
                onPress={flip}
            >
                <Icon
                    type={Constants.IONICONS_ICON}
                    icon="ios-arrow-redo-circle-outline"
                    color={Constants.MAIN_COLOR}
                    size={50}
                />
            </Pressable>
        </View>
    );
};
