import { NativeModules } from 'react-native';

const { Home } = NativeModules;

export const calculateHomeStats = async () => {
    let data = null;

    try {
        data = await Home.calculateStats();
    } catch (error) {
        console.log(error);
    }

    return data;
};
