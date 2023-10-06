import React from 'react';
import { Pressable, Image } from 'react-native';
import { Badge } from '@rneui/base';

import useOwnerStore from '../../app/useOwnerStore';

import { styles } from './pressable-button.styles';

export const NonInteractToyButton = ({ item, index }) => {
    const { putItemInRoom } = useOwnerStore(state => state);

    return (
        <Pressable style={styles.button} onPress={() => putItemInRoom(item)}>
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
    );
};
