import React from 'react';

import TabNavigation from './tab-navigation/tab-navigation.component';

import { useNavigate } from 'react-router-native';

import useUserStore from '../../app/useUserStore';
import { usePetTabs } from '../../hooks/common/usePetTabs.hook';
import { useUserTabs } from '../../hooks/common/useUserTabs.hook';

import { Constants } from '../../constants/constants';

import { styles } from './navigation.styles';

export const Navigation = () => {
    const { isUserSettings } = useUserStore(state => state);
    const navigate = useNavigate();
    const petTabs = usePetTabs();
    const userTabs = useUserTabs();

    const handleTabChange = e => {
        setTimeout(() => {
            navigate(e.path);
        }, 100);
    };

    return (
        <TabNavigation
            tabs={isUserSettings ? userTabs : petTabs}
            tabBarContainerBackground={
                isUserSettings ? '#000' : Constants.MAIN_COLOR
            }
            tabBarBackground="#FFE4E1"
            activeTabBackground={isUserSettings ? '#000' : Constants.MAIN_COLOR}
            labelStyle={styles.label}
            onTabChange={handleTabChange}
            transitionSpeed={100}
        />
    );
};
