import { NativeModules } from 'react-native';

const { Pets } = NativeModules;

export const calculatePetsStats = () => {
    Pets.calculateStats();
};
