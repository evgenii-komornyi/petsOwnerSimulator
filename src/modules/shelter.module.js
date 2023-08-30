import { NativeModules } from 'react-native';

const { Shelter } = NativeModules;

export const getShelter = async () => {
    let data = null;

    try {
        data = await Shelter.getShelter();
    } catch (error) {
        console.log(error);
    }

    return data;
};
