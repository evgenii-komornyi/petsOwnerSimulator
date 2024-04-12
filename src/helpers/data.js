import { PetsScreen } from '../screens/pet-screens/pets.screen';
import { HomeScreen } from '../screens/pet-screens/home.screen';
import { ShopScreen } from '../screens/pet-screens/shop.screen';
import { VetScreen } from '../screens/pet-screens/vet.screen';
import { CarouselScreen } from '../screens/pet-screens/carousel.screen';
import { SettingsScreen } from '../screens/setting-screens/settings.screen';
import { AccountScreen } from '../screens/setting-screens/account.screen';
import { ChangelogScreen } from '../screens/setting-screens/changelog.screen';
import { HelpScreen } from '../screens/setting-screens/help.screen';

export const routes = [
    {
        path: '/',
        screen: <PetsScreen />,
    },
    {
        path: '/home',
        screen: <HomeScreen />,
    },
    {
        path: '/shop',
        screen: <ShopScreen />,
    },
    // {
    //     path: '/vet',
    //     screen: <VetScreen />,
    // },
    {
        path: '/carousel',
        screen: <CarouselScreen />,
    },
    {
        path: '/account',
        screen: <AccountScreen />,
    },
    {
        path: '/settings',
        screen: <SettingsScreen />,
    },
    // {
    //     path: '/changelog',
    //     screen: <ChangelogScreen />,
    // },
    {
        path: '/help',
        screen: <HelpScreen />,
    },
];
