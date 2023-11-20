import { useEffect, useState } from 'react';
import {
    getApiLevel,
    getBrand,
    getManufacturer,
    getSystemName,
    getSystemVersion,
} from 'react-native-device-info';

export const useSystemInfo = () => {
    const [systemInfo, setSystemInfo] = useState({
        manufacturer: null,
        brand: null,
        os: null,
        version: null,
        api: null,
    });

    useEffect(() => {
        const getApi = async () => {
            const api = await getApiLevel();
            const manufacturer = await getManufacturer();

            if (api && manufacturer) {
                setSystemInfo({
                    manufacturer,
                    brand: getBrand(),
                    os: getSystemName(),
                    version: getSystemVersion(),
                    api,
                });
            }
        };
        getApi();
    }, []);

    return systemInfo;
};
