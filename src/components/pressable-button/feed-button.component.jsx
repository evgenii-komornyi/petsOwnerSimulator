import React from 'react';
import { Pressable, Image } from 'react-native';

import { Badge } from '@rneui/base';

import { styles } from './pressable-button.styles';
import { useFeedButton } from '../../hooks/logic/useFeedButton.hook';

export const FeedButton = ({ catId, item, index }) => {
    const [isDisabled, feed] = useFeedButton(catId, item);

    return (
        item.count > 0 && (
            <Pressable
                onPress={feed}
                style={[styles.button, { opacity: isDisabled ? 0.5 : 1 }]}
                disabled={isDisabled}
            >
                <Image
                    source={{ uri: item.image.unused }}
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
