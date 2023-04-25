import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '@rneui/themed';

import { CustomText } from '../custom-text/custom-text.component';

import useOwnerStore from '../../app/useOwnerStore';

import { icons } from '../../helpers/icons';

import { styles } from './status-bar.styles';

const HappyPetCoins = () => {
    const { happyPetCoins } = useOwnerStore();

    return (
        <>
            <Avatar
                size={25}
                source={icons.happyPetCoins}
                containerStyle={{ marginRight: 20 }}
            />
            <CustomText
                text={happyPetCoins.toFixed(2)}
                style={styles.happyPetCoinsText}
            />
        </>
    );
};

export default HappyPetCoins;
