import React from 'react';
import { View } from 'react-native';
import { CustomText } from '../custom-text/custom-text.component';

import { styles } from './empty-list.styles';

export const EmptyList = ({ text }) => {
    return (
        <View style={styles.container}>
            <CustomText text={text} style={styles.text} />
        </View>
    );
};
