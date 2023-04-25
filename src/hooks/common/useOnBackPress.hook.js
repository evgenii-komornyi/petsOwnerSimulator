import { useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';

export const useOnBackPress = () => {
    const backPressHandler = () => {
        Alert.alert('Sadness! :(', 'Are you sure you want to exit?', [
            {
                text: 'No',
                onPress: () => null,
                style: 'cancel',
            },
            {
                text: 'Yes',
                onPress: () => BackHandler.exitApp(),
            },
        ]);

        return true;
    };

    useEffect(() => {
        const backHander = BackHandler.addEventListener(
            'hardwareBackPress',
            backPressHandler
        );
        return () => {
            backHander.remove();
        };
    }, []);
};
