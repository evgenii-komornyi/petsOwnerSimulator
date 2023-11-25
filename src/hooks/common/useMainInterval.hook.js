import { useEffect } from 'react';

import useOwnerStore from '../../app/useOwnerStore';
import useHolidaysStore from '../../app/useHolidayStore';

import { Constants } from '../../constants/constants';
import { useAudio } from './useAudio.hook';
import { useVibrate } from './useVibrate.hook';

let interval = 0;

export const useMainInterval = () => {
    const {
        getCurrentOwner,
        calculatePetsStats,
        calculateHomeStats,
        alert,
        saveGame,
    } = useOwnerStore(state => state);
    const { checkHoliday } = useHolidaysStore(state => state);

    const [playSound] = useAudio();
    const [vibrate] = useVibrate();

    useEffect(() => {
        const fetchData = async () => {
            await getCurrentOwner();
            await calculateHomeStats();
        };

        const saveCurrentGame = async () => {
            await saveGame();
        };

        let timeSaveGame = -1;

        interval = setInterval(() => {
            timeSaveGame++;
            calculatePetsStats();
            fetchData();

            if (timeSaveGame === Constants.SAVE_GAME_INTERVAL) {
                saveCurrentGame();
                timeSaveGame = -1;
            }
        }, Constants.MAIN_INTERVAL * 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        checkHoliday();
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
