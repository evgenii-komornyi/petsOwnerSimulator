import React from 'react';

import { Avatar } from '@rneui/themed';

import { CustomText } from '../custom-text/custom-text.component';

import useOwnerStore from '../../app/useOwnerStore';

import { icons } from '../../data/icons';

import { styles } from './status-bar.styles';

export const HappyPetCoins = () => {
    const { happyPetCoins } = useOwnerStore(state => state);

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
