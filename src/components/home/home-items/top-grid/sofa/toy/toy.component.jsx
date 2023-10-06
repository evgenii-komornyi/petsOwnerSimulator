import React from 'react';
import { Pressable, Image } from 'react-native';
import { Badge } from '@rneui/base';

import { useMouseButton } from '../../../../../../hooks/logic/toys/mouse/useMouseButton.hook';

import { styles } from './toy.styles';

export const Toy = () => {
    const { toy, toggleDurabilityBadge, isBadgeVisible } = useMouseButton();

    return (
        <Pressable
            onPress={toggleDurabilityBadge}
            style={[styles.button, { opacity: toy.durability > 50 ? 1 : 0.5 }]}
        >
            <Image source={{ uri: toy.image.unused }} style={styles.toyImage} />
            {isBadgeVisible && (
                <Badge
                    value={toy.durability}
                    badgeStyle={styles.badge}
                    containerStyle={styles.badgeContainer}
                />
            )}
        </Pressable>
    );
};
