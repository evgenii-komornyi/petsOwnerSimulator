import { NativeModules } from 'react-native';
import { apiHandler } from '../helpers/api.helper';

const { Settings, Help } = NativeModules;

export const setAlarm = (id, hours, minutes) =>
    apiHandler(Settings.setAlarm, { id, hours, minutes });

export const cancelAlarm = id => apiHandler(Settings.cancelAlarm, { id });

export const getHelp = () => apiHandler(Help.getHelp);
