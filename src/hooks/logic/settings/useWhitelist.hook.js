import { useEffect } from 'react';
import { NativeModules } from 'react-native';

const { check } = NativeModules.Settings;

export const useWhitelist = () => {
    useEffect(() => {
        check();
    }, []);
};
