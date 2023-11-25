import React from 'react';
import { View } from 'react-native';
import { CustomText } from '../../custom-text/custom-text.component';

import { styles } from './changelog.styles';

export const Changelog = () => {
    return (
        <View>
            <CustomText text={'Changelog'} />
        </View>
    );
};
