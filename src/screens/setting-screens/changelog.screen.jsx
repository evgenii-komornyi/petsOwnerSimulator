import React from 'react';
import { View } from 'react-native';

import { useOnBackPress } from '../../hooks/common/useOnBackPress.hook';

import { Changelog } from '../../components/user-settings/changelog/changelog.component';

import { styles } from '../../styles/global.styles';

export const ChangelogScreen = () => {
    useOnBackPress();

    return (
        <View style={styles.container}>
            <Changelog />
        </View>
    );
};
