import { NativeModules } from 'react-native';

const { Settings } = NativeModules;

export const setAlarm = async (id, hours, minutes) => {
    let data = null;

    try {
        data = await Settings.setAlarm({ id, hours, minutes });
    } catch (error) {
        console.log(error);
    }

    return data;
};

export const cancelAlarm = async id => {
    let data = null;

    try {
        data = await Settings.cancelAlarm({ id });
    } catch (error) {
        console.log(error);
    }

    return data;
};
