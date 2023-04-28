import React from 'react';
import { useNavigate } from 'react-router-native';
import Tabbar from '@mindinventory/react-native-tab-bar-interaction';

import { useTabs } from '../../hooks/common/useTabs.hook';

import { styles } from './navigation.styles';
import { Constants } from '../../constants/constants';

export const Navigation = () => {
    const navigate = useNavigate();
    const tabs = useTabs();

    const handleTabChange = e => {
        setTimeout(() => {
            navigate(e.path);
        }, 100);
    };

    return (
        <Tabbar
            tabs={tabs}
            tabBarContainerBackground={Constants.MAIN_COLOR}
            tabBarBackground="#FFE4E1"
            activeTabBackground={Constants.MAIN_COLOR}
            labelStyle={styles.label}
            onTabChange={handleTabChange}
            transitionSpeed={100}
        />
    );
};
