import React from 'react';
import { View } from 'react-native';
import { Chip } from '@rneui/themed';

import { Icon } from '../../../icon/icon.component';

import { Constants } from '../../../../constants/constants';

import { styles } from '../shop-list.styles';

export const ItemDescription = ({ item }) => {
    const { stats } = item;

    const checkItemType = itemType => {
        return (
            <Icon
                type={Constants.MATERIALCOMMUNITYICONS_ICON}
                icon={itemType}
                size={20}
                color="white"
            />
        );
    };

    return (
        <>
            <View style={styles.forAnimalContainer}>
                {item.hasOwnProperty('forAnimal') && (
                    <Chip
                        icon={() => checkItemType(item.forAnimal)}
                        containerStyle={{ marginVertical: 5 }}
                        color="#999999"
                    />
                )}
            </View>
            <View style={styles.itemDescription}>
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
                {item.hasOwnProperty('maxSlots') && (
                    <Chip
                        color="warning"
                        title={`${item.maxSlots}`}
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
                {item.hasOwnProperty('durability') && (
                    <Chip
                        color="warning"
                        title={`${item.durability}`}
                        icon={() => (
                            <Icon
                                type={Constants.MATERIALICONS_ICON}
                                icon="shield"
                                size={20}
                                color="white"
                            />
                        )}
                        containerStyle={{ marginVertical: 5 }}
                    />
                )}
                {stats && stats.hasOwnProperty('happiness') && (
                    <Chip
                        color="success"
                        title={`${stats.happiness}`}
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
            </View>
        </>
    );
};
