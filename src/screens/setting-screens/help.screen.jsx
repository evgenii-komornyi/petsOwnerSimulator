import React from 'react';
import { View } from 'react-native';

import { useOnBackPress } from '../../hooks/common/useOnBackPress.hook';

import { Help } from '../../components/user-settings/help/help.component';

import { styles } from '../../styles/global.styles';

export const HelpScreen = () => {
    useOnBackPress();

    return (
        <View style={styles.container}>
            <Help />
        </View>
    );
};
