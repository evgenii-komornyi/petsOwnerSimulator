import { Icon } from '../../components/icon/icon.component';
import { Constants } from '../../constants/constants';

export const useTabs = () => {
    return [
        {
            path: '/',
            name: 'Pets',
            activeIcon: (
                <Icon
                    type={Constants.MATERIALICONS_ICON}
                    icon="pets"
                    size={Constants.MENU_ICON_SIZE}
                    color="white"
                />
            ),
            inactiveIcon: (
                <Icon
                    type={Constants.SIMPLELINESICONS_ICON}
                    icon="home"
                    size={Constants.MENU_ICON_SIZE}
                    color="white"
                />
            ),
        },
        {
            path: '/home',
            name: 'Home',
            activeIcon: (
                <Icon
                    type={Constants.FONTAWESOME5_ICON}
                    icon="door-open"
                    size={Constants.MENU_ICON_SIZE}
                    color="white"
                />
            ),
            inactiveIcon: (
                <Icon
                    type={Constants.FONTAWESOME5_ICON}
                    icon="door-closed"
                    size={Constants.MENU_ICON_SIZE}
                    color="white"
                />
            ),
        },
        {
            path: '/shop',
            name: 'Shop',
            activeIcon: (
                <Icon
                    type={Constants.FONTISTO_ICON}
                    icon="shopify"
                    size={Constants.MENU_ICON_SIZE}
                    color="white"
                />
            ),
            inactiveIcon: (
                <Icon
                    type={Constants.FONTISTO_ICON}
                    icon="shopping-store"
                    size={Constants.MEDIUM_ICON_SIZE}
                    color="white"
                />
            ),
        },
        {
            path: '/vet',
            name: 'Vet',
            activeIcon: (
                <Icon
                    type={Constants.FONTAWESOME5_ICON}
                    icon="hospital"
                    size={Constants.MENU_ICON_SIZE}
                    color="white"
                />
            ),
            inactiveIcon: (
                <Icon
                    type={Constants.FONTAWESOME5_ICON}
                    icon="hospital"
                    size={Constants.MEDIUM_ICON_SIZE}
                    color="white"
                />
            ),
        },
    ];
};
