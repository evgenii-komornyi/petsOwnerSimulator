import { PetsScreen } from '../screens/pets.screen';
import { HomeScreen } from '../screens/home.screen';
import { ShopScreen } from '../screens/shop.screen';
import { VetScreen } from '../screens/vet.screen';

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
    {
        path: '/vet',
        screen: <VetScreen />,
    },
];
