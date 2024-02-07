import React from 'react';
import { View } from 'react-native';
import { Chip } from '@rneui/themed';

import { Icon } from '../../../icon/icon.component';

import { Constants } from '../../../../constants/constants';

import { styles } from '../shop-list.styles';
import { CustomText } from '../../../custom-text/custom-text.component';
import { Stat } from './stat.component';

export const ItemDescription = ({ item }) => {
    const { stats } = item;

    const checkItemType = itemType => {
        return (
            <Icon
                type={Constants.MATERIALCOMMUNITYICONS_ICON}
                icon={itemType}
                size={20}
                color="black"
            />
        );
    };

    return (
        <>
            {/* <View style={styles.forAnimalContainer}>
                {item.hasOwnProperty('forAnimal') && (
                    <Chip
                        icon={() => checkItemType(item.forAnimal)}
                        containerStyle={{ marginVertical: 5 }}
                        color="silver"
                    />
                )}
            </View> */}
            <View style={styles.itemDescription}>
                {item.hasOwnProperty('satisfaction') && (
                    <Stat stat={item.satisfaction} statType="satisfaction" />
                )}
                {item.hasOwnProperty('damage') && (
                    <Stat stat={item.damage} statType="damage" />
                )}
                {item.hasOwnProperty('maxSlots') && (
                    <Stat stat={item.maxSlots} statType="maxSlots" />
                )}
                {item.hasOwnProperty('durability') && (
                    <Stat stat={item.durability} statType="durability" />
                )}
                {stats && stats.hasOwnProperty('happiness') && (
                    <Stat stat={stats.happiness} statType="happiness" />
                )}
            </View>
        </>
    );
};
