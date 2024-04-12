import { NativeModules } from 'react-native';
import { apiHandler } from '../helpers/api.helper';

const { Home } = NativeModules;

export const calculateHomeStats = async () => apiHandler(Home.calculateStats);
