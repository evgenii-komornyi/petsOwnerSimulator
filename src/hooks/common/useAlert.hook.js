import { Alert } from 'react-native';

export const useAlert = () => {
    const callAlert = (title, text, buttons) => {
        Alert.alert(title, text, buttons);
    };

    return callAlert;
};
