import React from 'react';
import { View } from 'react-native';
import { Header } from '@rneui/base';

import useUserStore from '../../app/useUserStore';

import { HappyPetCoins } from './happy-pet-coins.component';
import { RightMenu } from './right-menu/right-menu.component';

import { Constants } from '../../constants/constants';

import { styles } from './status-bar.styles';

export const StatusBar = () => {
    const { isUserSettings } = useUserStore(state => state);

    return (
        <View>
            <Header
                containerStyle={[
                    styles.statusBarContainer,
                    {
                        backgroundColor: isUserSettings
                            ? '#000'
                            : Constants.MAIN_COLOR,
                    },
                ]}
                leftComponent={<HappyPetCoins />}
                rightComponent={<RightMenu />}
            />
        </View>
    );
};
