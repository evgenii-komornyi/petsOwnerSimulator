import { NativeModules } from 'react-native';

const { Shop } = NativeModules;

export const getShop = async () => {
    let data = null;

    try {
        data = await Shop.getShop();
    } catch (error) {
        console.log(error);
    }

    return data;
};
