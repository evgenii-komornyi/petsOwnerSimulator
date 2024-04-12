import React from 'react';
import { Pressable } from 'react-native';

import { CustomText } from '../../../custom-text/custom-text.component';

import { useHelp } from '../../../../hooks/logic/settings/useHelp.hook';

import { styles } from '../help.styles';

export const Item = ({ item, disableScroll }) => {
    const { compileArrayByTag } = useHelp();

    const openCards = item => {
        compileArrayByTag(item);
        disableScroll();
    };

    return (
        <Pressable
            style={({ pressed }) => [
                pressed ? styles.pressedStyle : styles.unpressedStyle,
                styles.itemContainer,
            ]}
            onPress={() => openCards(item)}
        >
            <CustomText text={item} style={styles.textHelp} />
        </Pressable>
    );
};
