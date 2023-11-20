import React from 'react';
import { View } from 'react-native';
import { CustomText } from '../../custom-text/custom-text.component';

import { styles } from './help.styles';

export const Help = () => {
    return (
        <View>
            <CustomText text={'Help'} />
        </View>
    );
};
