import { NativeModules } from 'react-native';

const { Holiday } = NativeModules;

export const checkHoliday = async () => {
    let data = null;

    try {
        data = await Holiday.checkHoliday();
    } catch (error) {
        console.log(error);
    }

    return data;
};
