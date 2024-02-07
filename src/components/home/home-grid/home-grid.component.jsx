import React, { useEffect, useState } from 'react';
import { SvgUri } from 'react-native-svg';
import { Image, View } from 'react-native';

import { BottomGrid } from '../home-items/bottom-grid/bottom-grid.component';
import { MiddleGrid } from '../home-items/middle-grid/middle-grid.component';
import { TopGrid } from '../home-items/top-grid/top-grid.component';
import { HomeImage } from './home-image.component';
import { Holiday } from '../../holiday/holiday.component';
import { FreeCatsSlot } from '../free-cats-slot/free-cats-slot.component';

import useHolidayStore from '../../../app/useHolidayStore';
import useOwnerStore from '../../../app/useOwnerStore';
import useFreeSlotPropsStore from '../../../app/useFreeSlotPropsStore';

import { useRelation } from '../../../hooks/common/useRelation.hook';

import { Constants } from '../../../constants/constants';
import { styles } from './home-grid.styles';
import { styles as holidayStyles } from '../../holiday/holiday.styles';

export const HomeGrid = () => {
    const { decorations } = useHolidayStore(state => state);
    const {
        pets,
        home: {
            livingRoom: {
                smell: { smell, uri },
            },
        },
    } = useOwnerStore(state => state);
    const { randomPlaces } = useFreeSlotPropsStore(state => state);
    const {
        checkRelation,
        padding,
        setContainerHeight,
        calculateContainerSizeAndOffsets,
    } = useRelation();

    const [decorationSize, setDecorationSize] = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    });

    useEffect(() => {
        if (decorations.length > 0) {
            const { width, height, top, left } =
                calculateContainerSizeAndOffsets('halloweenDecoration');
            setDecorationSize({ width, height, top, left });
        }
    }, []);

    const {
        width: smellWidth,
        height: smellHeight,
        top: smellTop,
        left: smellLeft,
    } = calculateContainerSizeAndOffsets('smell');

    const renderFreeSlots = () => {
        if (
            pets.length === 1 &&
            pets.every(({ stats }) => stats.health !== 0)
        ) {
            return (
                <FreeCatsSlot
                    petPlace={randomPlaces[0].petPlace}
                    petPosition={pets[0].img[randomPlaces[0].petPosition].uri}
                />
            );
        }

        return pets
            .filter(pet => !pet.wasTaken || pet.stats.health !== 0)
            .map((pet, index) => (
                <FreeCatsSlot
                    key={pet.id}
                    petPlace={randomPlaces[index].petPlace}
                    petPosition={pet.img[randomPlaces[index].petPosition]?.uri}
                />
            ));
    };

    const calculatedPaddings = checkRelation()
        ? { paddingVertical: padding }
        : { paddingHorizontal: padding };

    const onLayout = event => {
        const { height } = event.nativeEvent.layout;
        setContainerHeight(height);
    };

    return (
        <View
            style={[styles.mainContainer, calculatedPaddings]}
            onLayout={onLayout}
        >
            <HomeImage>
                {decorations.length ? (
                    <Holiday
                        imageUri={decorations[0].uri}
                        animation={decorations[0].animation}
                        containerStyles={[
                            holidayStyles.holidayDecor,
                            {
                                width: decorationSize.width,
                                height: decorationSize.height,
                                top: decorationSize.top,
                                left: decorationSize.left,
                            },
                        ]}
                        imageStyles={[holidayStyles.decorImage]}
                    />
                ) : null}
                <View style={styles.itemsContainer}>
                    {renderFreeSlots()}
                    <TopGrid />
                    <MiddleGrid />
                    <BottomGrid />
                    {smell > 0 && (
                        <View
                            style={[
                                styles.smellContainer,
                                {
                                    width: smellWidth,
                                    height: smellHeight,
                                    top: smellTop,
                                    left: smellLeft,
                                    zIndex: 998,
                                    opacity:
                                        0.4 + smell / Constants.MAX_HOME_SMELL,
                                },
                            ]}
                        >
                            <Image
                                source={{
                                    uri: uri,
                                }}
                                style={styles.smellImage}
                            />
                        </View>
                    )}
                </View>
            </HomeImage>
        </View>
    );
};
