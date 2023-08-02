import { useEffect } from 'react';

import useOwnerStore from '../../app/useOwnerStore';

import { useCreateRef } from './useCreateRef.hook';

import { Constants } from '../../constants/constants';
import { useVibrate } from './useVibrate.hook';
import { useAudio } from './useAudio.hook';
import { isObjectExists } from '../../helpers/objects.helper';

let interval = 0;

export const useMainInterval = () => {
    const {
        pets,
        happyPetCoins,
        inventory: { litterBox },
        home,
        getCurrentOwner,
        calculatePetsStats,
        calculateHomeStats,
        setHealthLevel,
        setSatietyLevel,
        setMoodLevel,
        setDigestionLevel,
        setHappyPetCoins,
        poopInLitterBox,
        poopOnCarpet,
        setSmell,
    } = useOwnerStore(state => state);

    const [vibrate] = useVibrate();
    const [playSound] = useAudio();

    const currentPets = useCreateRef(pets);
    const currentHappyPetCoins = useCreateRef(happyPetCoins);
    const currentLitterBox = useCreateRef(litterBox);
    const currentHome = useCreateRef(home);

    const calculateNewStat = (
        currentStat,
        calculatedNewStat,
        soundToPlay = undefined,
        vibrateDuration = undefined
    ) => {
        let newStat = calculatedNewStat >= 0 ? calculatedNewStat : 0;

        if (currentStat > 0) {
            if (newStat === 0) {
                runVibrationAndSound(soundToPlay, vibrateDuration);
            }
        }

        return newStat;
    };

    const runVibrationAndSound = (soundToPlay, vibrateDuration) => {
        if (soundToPlay !== undefined) playSound(soundToPlay);

        if (vibrateDuration !== undefined) vibrate(vibrateDuration);
    };

    const isPetNotDead = health => health !== 0;

    const goToLitterBox = slots => {
        if (slots > 0) {
            poopInLitterBox(slots !== 0 ? slots - 1 : 0);

            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        interval = setInterval(() => {
            getCurrentOwner();
            calculatePetsStats();
            calculateHomeStats();
            // currentPets.current.length !== 0 &&
            //     currentPets.current.map(pet => {
            //         if (isPetNotDead(pet.stats.health)) {
            //             if (pet.stats.satiety > 0) {
            //                 if (
            //                     pet.stats.satiety >
            //                         Constants.HEALTH_UP_THRESHOLD &&
            //                     pet.stats.health < Constants.MAX_HEALTH_LEVEL
            //                 ) {
            //                     setHealthLevel(
            //                         pet.id,
            //                         pet.stats.health +
            //                             pet.statsIncreasing.health >
            //                             Constants.MAX_HEALTH_LEVEL
            //                             ? Constants.MAX_HEALTH_LEVEL
            //                             : pet.stats.health +
            //                                   pet.statsIncreasing.health
            //                     );
            //                 }

            //                 setSatietyLevel(
            //                     pet.id,
            //                     calculateNewStat(
            //                         pet.stats.satiety,
            //                         pet.stats.satiety -
            //                             pet.statsReducing.satiety,
            //                         undefined,
            //                         1.5
            //                     )
            //                 );
            //             } else {
            //                 setHealthLevel(
            //                     pet.id,
            //                     calculateNewStat(
            //                         pet.stats.health,
            //                         pet.stats.health - pet.statsReducing.health,
            //                         undefined,
            //                         2
            //                     )
            //                 );
            //             }

            //             if (pet.stats.digestion !== 0) {
            //                 setDigestionLevel(
            //                     pet.id,
            //                     calculateNewStat(
            //                         pet.stats.digestion,
            //                         pet.stats.digestion -
            //                             pet.statsReducing.digestion
            //                     )
            //                 );

            //                 if (pet.stats.digestion === 0) {
            //                     if (
            //                         !isObjectExists(currentLitterBox.current) ||
            //                         !goToLitterBox(
            //                             currentLitterBox.current.slots
            //                         )
            //                     ) {
            //                         poopOnCarpet();
            //                     }

            //                     playSound('poo');
            //                     vibrate();
            //                 }
            //             }

            //             if (
            //                 pet.stats.mood > 0 &&
            //                 pet.stats.satiety > 0 &&
            //                 pet.stats.health > 0
            //             ) {
            //                 setHappyPetCoins();
            //             }

            //             // setMoodLevel(
            //             //     pet.id,
            //             //     calculateNewStat(
            //             //         pet.stats.mood,
            //             //         pet.stats.mood - pet.statsReducing.mood,
            //             //         'sad',
            //             //         1
            //             //     )
            //             // );
            //             setMoodLevel();
            //         }

            //         return pet;
            //     });

            // if (currentHome.current.impurity !== 0) {
            //     const calculatedSmellWithPoopsOnCarpet =
            //         currentHome.current.smell + currentHome.current.impurity;

            //     setSmell(
            //         calculatedSmellWithPoopsOnCarpet > Constants.MAX_HOME_SMELL
            //             ? Constants.MAX_HOME_SMELL
            //             : calculatedSmellWithPoopsOnCarpet
            //     );
            // }

            // const calculatedSmellWithOpenWindow =
            //     currentHome.current.smell - Constants.HOME_SMELL_DECREASE;

            // if (currentHome.current.isWindowOpen) {
            //     setSmell(
            //         calculatedSmellWithOpenWindow < 0
            //             ? 0
            //             : calculatedSmellWithOpenWindow
            //     );
            // }
        }, Constants.MAIN_INTERVAL * 1000);

        return () => clearInterval(interval);
    }, []);
};
