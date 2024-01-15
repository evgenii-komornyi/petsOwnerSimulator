import React from 'react';
import { View, ImageBackground } from 'react-native';

import { CustomBadge } from '../../../../custom-badge/custom-badge.component';
import { PressableButton } from '../../../../pressable-button/pressable-button.component';

import useOwnerStore from '../../../../../app/useOwnerStore';

import { useToggleBadgeVisibilityButton } from '../../../../../hooks/logic/toys/mouse/useToggleBadgeVisibilityButton.hook';
import { useRelation } from '../../../../../hooks/common/useRelation.hook';

import { styles } from './cat-house.styles';

export const CatHouse = () => {
    const {
        home: {
            livingRoom: { catHouse },
        },
    } = useOwnerStore(state => state);
    const { isBadgeVisible, toggleDurabilityBadge } =
        useToggleBadgeVisibilityButton();

    const { calculateContainerSizeAndOffsets } = useRelation();

    const { width, height, top, left } =
        calculateContainerSizeAndOffsets('catHouse');

    return (
        Object.keys(catHouse).length !== 0 && (
            <View
                style={[styles.catHouseContainer, { width, height, top, left }]}
            >
                <PressableButton onPress={toggleDurabilityBadge}>
                    <ImageBackground
                        resizeMode="contain"
                        source={{ uri: catHouse?.image?.currentImage }}
                        style={styles.catHouseImage}
                    />
                    <CustomBadge
                        isBadgeVisible={isBadgeVisible}
                        value={catHouse.durability}
                        badgeStyle={styles.badge}
                        containerStyle={styles.badgeContainer}
                    />
                </PressableButton>
            </View>
        )
    );
};
