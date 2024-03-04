import { Icon } from '../../components/icon/icon.component';
import { Constants } from '../../constants/constants';

export const useUserTabs = () => {
    return [
        {
            path: '/account',
            name: 'Account',
            activeIcon: (
                <Icon
                    type={Constants.MATERIALCOMMUNITYICONS_ICON}
                    icon="clipboard-account"
                    size={Constants.MENU_ICON_SIZE}
                    color="white"
                />
            ),
            inactiveIcon: (
                <Icon
                    type={Constants.MATERIALCOMMUNITYICONS_ICON}
                    icon="clipboard-account-outline"
                    size={Constants.MENU_ICON_SIZE}
                    color="white"
                />
            ),
        },
        {
            path: '/settings',
            name: 'Settings',
            activeIcon: (
                <Icon
                    type={Constants.MATERIALCOMMUNITYICONS_ICON}
                    icon="cellphone-cog"
                    size={Constants.MENU_ICON_SIZE}
                    color="white"
                />
            ),
            inactiveIcon: (
                <Icon
                    type={Constants.MATERIALCOMMUNITYICONS_ICON}
                    icon="cog"
                    size={Constants.MENU_ICON_SIZE}
                    color="white"
                />
            ),
        },
        // {
        //     path: '/changelog',
        //     name: 'Changelog',
        //     activeIcon: (
        //         <Icon
        //             type={Constants.MATERIALCOMMUNITYICONS_ICON}
        //             icon="cog-clockwise"
        //             size={Constants.MENU_ICON_SIZE}
        //             color="white"
        //         />
        //     ),
        //     inactiveIcon: (
        //         <Icon
        //             type={Constants.MATERIALCOMMUNITYICONS_ICON}
        //             icon="cog-counterclockwise"
        //             size={Constants.MEDIUM_ICON_SIZE}
        //             color="white"
        //         />
        //     ),
        // },
        // {
        //     path: '/help',
        //     name: 'Help',
        //     activeIcon: (
        //         <Icon
        //             type={Constants.IONICONS_ICON}
        //             icon="help-circle"
        //             size={Constants.MENU_ICON_SIZE}
        //             color="white"
        //         />
        //     ),
        //     inactiveIcon: (
        //         <Icon
        //             type={Constants.IONICONS_ICON}
        //             icon="help-circle-outline"
        //             size={Constants.MENU_ICON_SIZE}
        //             color="white"
        //         />
        //     ),
        // },
    ];
};
