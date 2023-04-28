import React, { memo, useCallback } from 'react';
import { ScrollView, View } from 'react-native';

import { CustomText } from '../../custom-text/custom-text.component';
import { Icon } from '../../icon/icon.component';

import { Constants } from '../../../constants/constants';

import { styles } from './sides.styles';

export const BackSide = memo(({ item: { name, bio }, scroll, scrollEnd }) => {
    const handleScrollStart = useCallback(() => {
        scroll();
    }, [scroll]);

    const handleScrollEnd = useCallback(() => {
        scrollEnd();
    }, [scrollEnd]);

    return (
        <View style={styles.cardBack}>
            <View style={styles.nameContainer}>
                <CustomText text={name} style={styles.name} />
            </View>
            <ScrollView
                showsVerticalScrollIndicator
                onScrollBeginDrag={handleScrollStart}
                onMomentumScrollEnd={handleScrollEnd}
            >
                <CustomText style={styles.bio} text={bio} />
            </ScrollView>
            <View style={styles.scrollIconContainer}>
                <Icon type={Constants.FONTISTO_ICON} icon="arrow-v" size={20} />
            </View>
        </View>
    );
});
