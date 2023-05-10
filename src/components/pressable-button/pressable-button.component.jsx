import React, { useState } from 'react';
import { Pressable, Image } from 'react-native';

import { Badge } from '@rneui/base';

import useOwnerStore from '../../app/useOwnerStore';

import { useAudio } from '../../hooks/common/useAudio.hook';
import { styles } from './pressable-button.styles';

export const PressableButton = ({
    catId,
    item,
    currentFoodLevel,
    currentDigestionLevel,
    index,
}) => {
    const { feedPet, setDigestionLevel } = useOwnerStore(state => state);
    const [playSound] = useAudio();

    const [isDisabled, setIsDisabled] = useState(false);

    const feed = () => {
        feedPet(catId, currentFoodLevel, item);
        playSound('eating');

        if (currentDigestionLevel === 0) {
            setDigestionLevel(catId, 30);
        }

        setIsDisabled(true);

        setTimeout(() => {
            setIsDisabled(false);
        }, 2000);
    };

    return (
        item.count > 0 && (
            <Pressable
                onPress={feed}
                style={[styles.button, { opacity: isDisabled ? 0.5 : 1 }]}
                disabled={isDisabled}
            >
                <Image
                    source={item.image.new}
                    style={[
                        styles.image,
                        {
                            marginLeft: index !== 0 ? 20 : 0,
                        },
                    ]}
                />
                <Badge
                    value={item.count}
                    badgeStyle={styles.badge}
                    containerStyle={styles.badgeContainer}
                />
            </Pressable>
        )
    );
};
