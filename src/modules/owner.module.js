import { NativeModules } from 'react-native';

const { Owner } = NativeModules;

export const getCurrentOwner = () => callOwnerAPI('getOwner');

export const adoptPet = (petType, petToAdopt) =>
    callOwnerAPI('adoptPet', { petType, petToAdopt });

export const feedPet = (petId, itemId) =>
    callOwnerAPI('feedPet', { petId, itemId });

export const petPet = (petId, swipeDirection) =>
    callOwnerAPI('petPet', { petId, swipeDirection });

export const sayGoodbye = petId => callOwnerAPI('sayGoodbye', { petId });

export const buyItem = (itemType, itemToBuy) =>
    callOwnerAPI('buyItem', { itemType, itemToBuy });

export const interactWithWindow = () => callOwnerAPI('interactWithWindow');

export const cleanRoom = () => callOwnerAPI('cleanRoom');

export const cleanLitterBox = () => callOwnerAPI('cleanLitterBox');

export const setHPC = () => callOwnerAPI('updateHPC');

export const putItemInRoom = (itemType, itemToPut) =>
    callOwnerAPI('putItemInRoom', { itemType, itemToPut });

export const changeAlarmActivity = (id, activityFlag) =>
    callOwnerAPI('changeAlarmActivity', { id, activityFlag });

export const changeAlarmTime = (id, hours, minutes) =>
    callOwnerAPI('changeAlarmTime', { id, hours, minutes });

export const saveNotification = ({ title, body }) =>
    callOwnerAPI('saveNotification', { title, body });

const callOwnerAPI = async (method, params = null) => {
    try {
        let data;
        if (params) {
            data = await Owner[method](params);
        } else {
            data = await Owner[method]();
        }

        return data;
    } catch (error) {
        console.error(error);

        return null;
    }
};
