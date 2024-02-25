import React from 'react';
import { ImageBackground, View, Image, Pressable } from 'react-native';

import { useAudio } from '../../../../../hooks/common/useAudio.hook';
import { useRelation } from '../../../../../hooks/common/useRelation.hook';

import useOwnerStore from '../../../../../app/useOwnerStore';
import useHolidayStore from '../../../../../app/useHolidayStore';

import { styles } from './carpet.styles';

export const Carpet = () => {
    const {
        home: {
            livingRoom: {
                excrete: { poop, pee },
                carpet,
            },
        },
        cleanRoom,
    } = useOwnerStore(state => state);

    const { carpet: holidayCarpet } = useHolidayStore(state => state);

    const { calculateContainerSizeAndOffsets } = useRelation();

    const { width, height, top, left } =
        calculateContainerSizeAndOffsets('carpet');

    const {
        width: poopWidth,
        height: poopHeight,
        top: poopTop,
        left: poopLeft,
    } = calculateContainerSizeAndOffsets('poop');

    const {
        width: peeWidth,
        height: peeHeight,
        top: peeTop,
        left: peeLeft,
    } = calculateContainerSizeAndOffsets('pee');

    const [playSound] = useAudio();

    const roomCleanup = async () => {
        await cleanRoom();
        await playSound('homeCleanup');
    };

    return (
        <View style={[styles.carpetContainer, { width, height, top, left }]}>
            <ImageBackground
                source={{
                    uri: holidayCarpet[0]?.uri || carpet.uri,
                }}
                resizeMode="center"
                style={styles.carpetImage}
            >
                {poop.poopOnFloorCount > 0 && (
                    <View
                        style={{
                            width: poopWidth,
                            height: poopHeight,
                            position: 'absolute',
                            top: poopTop,
                            left: poopLeft,
                        }}
                    >
                        <Pressable onPress={roomCleanup}>
                            <Image
                                source={{
                                    uri: poop.uri,
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'contain',
                                }}
                            />
                        </Pressable>
                    </View>
                )}
                {pee.peeOnFloorCount > 0 && (
                    <View
                        style={{
                            width: peeWidth,
                            height: peeHeight,
                            position: 'absolute',
                            zIndex: 999,
                            top: peeTop,
                            left: peeLeft,
                        }}
                    >
                        <Pressable onPress={roomCleanup}>
                            <Image
                                source={{
                                    uri: pee.uri,
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'contain',
                                }}
                            />
                        </Pressable>
                    </View>
                )}
            </ImageBackground>
        </View>
    );
};
