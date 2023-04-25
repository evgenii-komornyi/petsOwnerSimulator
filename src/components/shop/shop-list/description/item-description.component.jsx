import React from 'react';
import { View } from 'react-native';
import { Chip } from '@rneui/themed';

import { Icon } from '../../../icon/icon.component';

import { Constants } from '../../../../constants/constants';

import { styles } from '../shop-list.styles';

export const ItemDescription = ({ item }) => {
    const checkFoodType = foodType => {
        return (
            <Icon
                type={Constants.MATERIALCOMMUNITYICONS_ICON}
                icon={foodType}
                size={20}
                color="white"
            />
        );
    };

    return (
        <View style={styles.itemDescription}>
            {item.hasOwnProperty('forAnimal') && (
                <Chip
                    icon={() => checkFoodType(item.forAnimal)}
                    containerStyle={{ marginVertical: 5 }}
                />
            )}
            {item.hasOwnProperty('satisfaction') && (
                <Chip
                    color="success"
                    title={`${item.satisfaction}`}
                    icon={() => (
                        <Icon
                            type={Constants.ENTYPO_ICON}
                            icon="triangle-up"
                            size={20}
                            color="white"
                        />
                    )}
                    containerStyle={{ marginVertical: 5 }}
                />
            )}
            {item.hasOwnProperty('damage') && (
                <Chip
                    color="error"
                    title={`${item.damage}`}
                    icon={() => (
                        <Icon
                            type={Constants.ENTYPO_ICON}
                            icon="triangle-down"
                            size={20}
                            color="white"
                        />
                    )}
                />
            )}
            {item.hasOwnProperty('slots') && (
                <Chip
                    color="warning"
                    title={`${item.slots}`}
                    icon={() => (
                        <Icon
                            type={Constants.ENTYPO_ICON}
                            icon="time-slot"
                            size={20}
                            color="white"
                        />
                    )}
                    containerStyle={{ marginVertical: 5 }}
                />
            )}
        </View>
    );
};
