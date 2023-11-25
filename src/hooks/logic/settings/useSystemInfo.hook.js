import { useEffect, useState } from 'react';
import {
    getApiLevel,
    getBrand,
    getManufacturer,
    getSystemName,
    getSystemVersion,
} from 'react-native-device-info';

import { knownDevices, withoutWarningDevices } from '../../../data/warnings';

export const useSystemInfo = () => {
    const [systemInfo, setSystemInfo] = useState({
        manufacturer: null,
        brand: null,
        os: null,
        version: null,
        api: null,
    });
    const [isCorrectDevice, setIsCorrectDevice] = useState(false);
    const [isWithoutWarningDevice, setIsWithoutWarningDevice] = useState(false);

    useEffect(() => {
        const getApi = async () => {
            const api = await getApiLevel();
            const manufacturer = await getManufacturer();

            if (api && manufacturer) {
                setSystemInfo({
                    manufacturer: manufacturer.toLowerCase(),
                    brand: getBrand().toLowerCase(),
                    os: getSystemName(),
                    version: getSystemVersion(),
                    api,
                });
                setIsCorrectDevice(
                    knownDevices.some(
                        device => device === manufacturer.toLowerCase()
                    )
                );
                setIsWithoutWarningDevice(
                    withoutWarningDevices.some(
                        device => device === manufacturer.toLowerCase()
                    )
                );
            }
        };
        getApi();
    }, []);

    return { systemInfo, isCorrectDevice, isWithoutWarningDevice };
};
