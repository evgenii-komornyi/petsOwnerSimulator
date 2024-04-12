import { NativeModules } from 'react-native';
import { apiHandler } from '../helpers/api.helper';

const { Shelter } = NativeModules;

export const getShelter = async () => apiHandler(Shelter.getShelter);
