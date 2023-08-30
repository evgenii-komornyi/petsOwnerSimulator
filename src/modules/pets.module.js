import { NativeModules } from 'react-native';

const { Pets } = NativeModules;

export const calculatePetsStats = async () => {
    let data = null;

    try {
        data = await Pets.calculateStats();
    } catch (error) {
        console.log(error);
    }

    return data;
};
