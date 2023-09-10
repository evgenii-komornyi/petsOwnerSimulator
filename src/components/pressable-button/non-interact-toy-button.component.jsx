import React from 'react';
import { Pressable, Image } from 'react-native';
import { Badge } from '@rneui/base';

import { styles } from './pressable-button.styles';

export const NonInteractToyButton = ({ catId, item, index }) => {
    return (
        item.count > 0 && (
            <Pressable style={styles.button}>
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
