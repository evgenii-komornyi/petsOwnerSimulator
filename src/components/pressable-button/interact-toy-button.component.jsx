import React from 'react';
import { Pressable, Image } from 'react-native';

import { styles } from './pressable-button.styles';

export const InteractToyButton = ({ item, index, petId }) => {
    return (
        <Pressable style={styles.button}>
            <Image
                source={{ uri: item.image.currentImage }}
                style={[
                    styles.image,
                    {
                        marginLeft: index !== 0 ? 20 : 0,
                    },
                ]}
            />
        </Pressable>
    );
};
