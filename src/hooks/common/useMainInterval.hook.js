import { useEffect } from 'react';

import useOwnerStore from '../../app/useOwnerStore';
import useHolidaysStore from '../../app/useHolidayStore';

import { Constants } from '../../constants/constants';
import { useAudio } from './useAudio.hook';
import { useVibrate } from './useVibrate.hook';
import useRelationStore from '../../app/useRelationStore';
import Config from '../../factories/Config';
import useFreeSlotPropsStore from '../../app/useFreeSlotPropsStore';
import useSettingsStore from '../../app/useSettingsStore';

let interval = 0;

export const useMainInterval = () => {
    const {
        pets,
        getCurrentOwner,
        calculatePetsStats,
        calculateHomeStats,
        alert,
        saveGame,
    } = useOwnerStore(state => state);
    const { checkHoliday, isLoaded: isHolidaysLoaded } = useHolidaysStore(
        state => state
    );
    const { setImages } = useRelationStore(state => state);
    const { generateRandomPetsPosition } = useFreeSlotPropsStore(
        state => state
    );
    const { intervalTime, setIntervalId } = useSettingsStore(state => state);

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

        const startGame = () => {
            timeSaveGame++;
            calculatePetsStats();
            fetchData();

            if (timeSaveGame === Constants.SAVE_GAME_INTERVAL) {
                saveCurrentGame();
                timeSaveGame = -1;
            }
        };

        interval = setInterval(startGame, intervalTime * 1000);
        setIntervalId(interval);

        return () => clearInterval(interval);
    }, [intervalTime]);

    useEffect(() => {
        checkHoliday();
        const config = new Config();

        setImages(config.getImages());
        generateRandomPetsPosition(pets);
    }, [pets.length]);

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

    return { isHolidaysLoaded };
};
