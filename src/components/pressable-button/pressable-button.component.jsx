import React from 'react';
import { Pressable, View } from 'react-native';
import { Badge } from '@rneui/base';
import useOwnerStore from '../../app/useOwnerStore';
import { useAudio } from '../../hooks/common/useAudio.hook';
import { Image } from 'react-native';

export const PressableButton = ({
    catId,
    item,
    currentFoodLevel,
    currentDigestionLevel,
    index,
}) => {
    const { feedPet, setDigestionLevel } = useOwnerStore();
    const [playSound] = useAudio();

    const feed = () => {
        feedPet(catId, currentFoodLevel, item);
        playSound('eating');

        if (currentDigestionLevel === 0) {
            setDigestionLevel(catId, 30);
        }
    };

    return (
        item.count > 0 && (
            <Pressable onPress={feed} style={{ marginBottom: 10 }}>
                <Image
                    source={item.image.new}
                    style={{
                        width: 60,
                        height: 60,
                        marginLeft: index !== 0 ? 20 : 0,
                        resizeMode: 'contain',
                    }}
                />
                <Badge
                    value={item.count}
                    badgeStyle={{ backgroundColor: 'black' }}
                    containerStyle={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                />
            </Pressable>
        )
    );
};
