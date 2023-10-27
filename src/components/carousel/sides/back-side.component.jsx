import React from 'react';
import { ScrollView, View } from 'react-native';

import { CustomText } from '../../custom-text/custom-text.component';
import { Icon } from '../../icon/icon.component';

import { Constants } from '../../../constants/constants';

import { styles } from './sides.styles';

export const BackSide = ({ item: { name, bio } }) => {
    return (
        <View style={styles.cardBack}>
            <View style={styles.nameContainer}>
                <CustomText text={name} style={styles.name} />
            </View>
            <ScrollView showsVerticalScrollIndicator>
                <CustomText style={styles.bio} text={bio} />
            </ScrollView>
            <View style={styles.scrollIconContainer}>
                <Icon type={Constants.FONTISTO_ICON} icon="arrow-v" size={20} />
            </View>
        </View>
    );
};
