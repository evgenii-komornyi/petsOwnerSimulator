import { NativeModules } from 'react-native';
import { apiHandler } from '../helpers/api.helper';

const { Shop } = NativeModules;

export const getShop = () => apiHandler(Shop.getShop);
