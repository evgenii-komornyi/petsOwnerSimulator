import { useState } from 'react';
import { SceneMap, TabBar } from 'react-native-tab-view';

import { Icon } from '../../components/icon/icon.component';
import { MealList } from '../../tabs/actions/meal/meal-list.tab';
import { PlayList } from '../../tabs/actions/play/play-list.tab';

import { Constants } from '../../constants/constants';

import { styles } from '../../components/actions/actions.styles';

export const useActionsTabs = () => {
    const [index, onIndexChange] = useState(0);

    const [routes] = useState([
        {
            key: 'meal',
            type: Constants.IONICONS_ICON,
            icon: 'md-restaurant-outline',
        },
        {
            key: 'play',
            type: Constants.IONICONS_ICON,
            icon: 'md-baseball-outline',
        },
    ]);

    const renderIcon = ({ route, color }) => (
        <Icon
            type={route.type}
            icon={route.icon}
            size={Constants.MEDIUM_ICON_SIZE}
            color={color}
        />
    );

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            renderIcon={renderIcon}
            style={styles.tabbar}
        />
    );

    const renderScene = SceneMap({
        meal: MealList,
        play: PlayList,
    });

    return [index, onIndexChange, routes, renderTabBar, renderScene];
};
