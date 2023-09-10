import { useEffect } from 'react';

import useOwnerStore from '../../app/useOwnerStore';

import { Constants } from '../../constants/constants';
import { useAudio } from './useAudio.hook';
import { useVibrate } from './useVibrate.hook';

let interval = 0;

export const useMainInterval = () => {
    const { getCurrentOwner, calculatePetsStats, calculateHomeStats, alert } =
        useOwnerStore(state => state);

    const [playSound] = useAudio();
    const [vibrate] = useVibrate();

    useEffect(() => {
        const fetchData = async () => {
            await getCurrentOwner();
            await calculateHomeStats();
        };
        interval = setInterval(() => {
            calculatePetsStats();
            fetchData();
        }, Constants.MAIN_INTERVAL * 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleAlert = async () => {
            if (alert && Object.keys(alert).length !== 0) {
                if (alert.hasOwnProperty('sound')) {
                    await playSound(alert.sound.fileName);
                }

                if (alert.hasOwnProperty('vibration')) {
                    vibrate(alert.vibration.duration);
                }
            }
        };

        handleAlert();
    }, [alert]);
};
