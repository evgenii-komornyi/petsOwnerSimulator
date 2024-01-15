import React from 'react';
import { Image, View } from 'react-native';

import { PressableButton } from '../../../../../pressable-button/pressable-button.component';
import { CustomBadge } from '../../../../../custom-badge/custom-badge.component';

import { useToggleBadgeVisibilityButton } from '../../../../../../hooks/logic/toys/mouse/useToggleBadgeVisibilityButton.hook';
import { useRelation } from '../../../../../../hooks/common/useRelation.hook';

import useOwnerStore from '../../../../../../app/useOwnerStore';

import { styles } from './toy.styles';

export const Toy = () => {
    const { toy } = useOwnerStore(state => state.home.livingRoom);
    const { toggleDurabilityBadge, isBadgeVisible } =
        useToggleBadgeVisibilityButton();

    const { calculateContainerSizeAndOffsets } = useRelation();
    const { width, height, top, left } =
        calculateContainerSizeAndOffsets('mouse');

    return (
        <View
            style={[
                styles.button,
                { width: width + 15, height: height + 15, top, left },
            ]}
        >
            <PressableButton
                onPress={toggleDurabilityBadge}
                style={{ opacity: toy.durability > 50 ? 1 : 0.5 }}
            >
                <Image
                    source={{ uri: toy.image.unused }}
                    style={styles.toyImage}
                />
                <CustomBadge
                    isBadgeVisible={isBadgeVisible}
                    value={toy.durability}
                    badgeStyle={styles.badge}
                    containerStyle={styles.badgeContainer}
                />
            </PressableButton>
        </View>
    );
};
