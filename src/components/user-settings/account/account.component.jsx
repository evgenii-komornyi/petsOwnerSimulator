import React from 'react';
import { View } from 'react-native';
import { CustomText } from '../../custom-text/custom-text.component';

import { styles } from './account.styles';

export const Account = () => {
    return (
        <View>
            <CustomText text={'Account'} />
        </View>
    );
};
