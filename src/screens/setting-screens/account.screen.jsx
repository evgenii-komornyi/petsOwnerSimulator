import React from 'react';
import { View } from 'react-native';

import { useOnBackPress } from '../../hooks/common/useOnBackPress.hook';

import { Account } from '../../components/user-settings/account/account.component';

import { styles } from '../../styles/global.styles';

export const AccountScreen = () => {
    useOnBackPress();

    return (
        <View style={styles.container}>
            <Account />
        </View>
    );
};
