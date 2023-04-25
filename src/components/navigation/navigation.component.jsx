import React from 'react';
import { useNavigate } from 'react-router-native';
import Tabbar from '@mindinventory/react-native-tab-bar-interaction';

import { useTabs } from './useTabs.hook';

import { styles } from './navigation.styles';

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
            tabBarContainerBackground="#6A5ACD"
            tabBarBackground="#FFE4E1"
            activeTabBackground="#6A5ACD"
            labelStyle={styles.label}
            onTabChange={handleTabChange}
            transitionSpeed={100}
        />
    );
};
