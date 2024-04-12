import { NativeModules } from 'react-native';
import { apiHandler } from '../helpers/api.helper';

const { Holiday } = NativeModules;

export const checkHoliday = async () => apiHandler(Holiday.checkHoliday);
