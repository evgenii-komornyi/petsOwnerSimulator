import React from 'react';
import { View } from 'react-native';

import { Icon } from '../../../icon/icon.component';
import { CustomText } from '../../../custom-text/custom-text.component';

import { iconByStat } from '../../../../data/icons';

import { styles } from '../shop-list.styles';

export const Stat = ({ stat, statType }) => {
    return (
        <View style={styles.statContainer}>
            <Icon
                type={iconByStat[statType].type}
                icon={iconByStat[statType].icon}
                size={20}
                color={iconByStat[statType].color}
            />
            <CustomText text={stat} style={{ fontWeight: 'bold' }} />
        </View>
    );
};
