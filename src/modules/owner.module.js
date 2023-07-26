import { NativeModules } from 'react-native';

const { Owner } = NativeModules;

export const getCurrentOwner = async () => {
    let data = null;

    try {
        data = await Owner.getOwner();
    } catch (error) {
        console.log(error);
    }

    return data;
};

export const adoptPet = async (petType, petToAdopt) => {
    let data = null;

    try {
        data = await Owner.adoptPet({ petType, petToAdopt });
    } catch (error) {
        console.error(error);
    }

    return data;
};

export const buyItem = async (itemType, itemToBuy) => {
    let data = null;

    try {
        data = await Owner.buyItem({ itemType, itemToBuy });
    } catch (error) {
        console.error(error);
    }

    return data;
};

export const setHPC = async () => {
    let data = null;

    try {
        data = await Owner.updateHPC();
    } catch (error) {
        console.error(error);
    }

    return data;
};
