import { useEffect } from 'react';

import useOwnerStore from '../../app/useOwnerStore';

import { useCreateRef } from './useCreateRef.hook';

import { Constants } from '../../constants/constants';
import { useVibrate } from './useVibrate.hook';
import { useAudio } from './useAudio.hook';

const timer = 15;

let interval = 0;

export const useMainInterval = () => {
    const {
        pets,
        happyPetCoins,
        litterBox,
        home,
        setHealthLevel,
        setHungerLevel,
        setMoodLevel,
        setDigestionLevel,
        setHappyPetCoins,
        poopInLitter,
        poopOnCarpet,
        setSmell,
    } = useOwnerStore();

    const [vibrate] = useVibrate();
    const [playSound] = useAudio();

    const currentPets = useCreateRef(pets);
    const currentHappyPetCoins = useCreateRef(happyPetCoins);
    const currentLitter = useCreateRef(litterBox);
    const currentHome = useCreateRef(home);

    const calculateNewStat = (
        currentStat,
        calculatedNewStat,
        soundToPlay = undefined,
        vibrateDuration = undefined
    ) => {
        let newStat = calculatedNewStat >= 0 ? calculatedNewStat : 0;

        runVibrationAndSound(
            currentStat,
            newStat,
            soundToPlay,
            vibrateDuration
        );

        return newStat;
    };

    const runVibrationAndSound = (
        currentStat,
        newStat,
        soundToPlay,
        vibrateDuration
    ) => {
        if (currentStat > 0) {
            if (newStat === 0) {
                if (soundToPlay !== undefined) playSound(soundToPlay);

                if (vibrateDuration !== undefined) vibrate(vibrateDuration);
            }
        }
    };

    useEffect(() => {
        interval = setInterval(() => {
            currentPets.current.length !== 0 &&
                currentPets.current.map(pet => {
                    if (pet.stats.hunger > 0) {
                        if (
                            pet.stats.hunger > 50 &&
                            pet.stats.health < Constants.MAX_HEALTH_LEVEL
                        ) {
                            setHealthLevel(
                                pet.id,
                                pet.stats.health + 5 >
                                    Constants.MAX_HEALTH_LEVEL
                                    ? Constants.MAX_HEALTH_LEVEL
                                    : pet.stats.health + 5
                            );
                        }

                        setHungerLevel(
                            pet.id,
                            calculateNewStat(
                                pet.stats.hunger,
                                pet.stats.hunger - pet.statsReducing.hunger,
                                undefined,
                                1.5
                            )
                        );
                    } else {
                        setHealthLevel(
                            pet.id,
                            calculateNewStat(
                                pet.stats.health,
                                pet.stats.health - pet.statsReducing.health,
                                undefined,
                                2
                            )
                        );
                    }

                    setDigestionLevel(
                        pet.id,
                        calculateNewStat(
                            pet.stats.digestion,
                            pet.stats.digestion - pet.statsReducing.digestion
                        )
                    );

                    if (
                        pet.stats.mood > 0 &&
                        pet.stats.hunger > 0 &&
                        pet.stats.health > 0
                    ) {
                        setHappyPetCoins(currentHappyPetCoins.current + 0.15);
                    }

                    let isPetPooped = false;
                    if (pet.stats.digestion === 1) {
                        if (
                            Object.keys(currentLitter.current).length !== 0 &&
                            currentLitter.current.slots !== 0
                        ) {
                            poopInLitter();
                            isPetPooped = true;
                        }

                        if (!isPetPooped) poopOnCarpet();

                        vibrate();
                        playSound('poo');
                    }

                    setMoodLevel(
                        pet.id,
                        calculateNewStat(
                            pet.stats.mood,
                            pet.stats.mood - pet.statsReducing.mood,
                            'sad',
                            1
                        )
                    );

                    return pet;
                });

            if (currentHome.current.impurity !== 0) {
                setSmell(
                    currentHome.current.smell + currentHome.current.impurity >
                        Constants.MAX_HOME_SMELL
                        ? Constants.MAX_HOME_SMELL
                        : currentHome.current.smell +
                              currentHome.current.impurity
                );
            }

            if (currentHome.current.isWindowOpen) {
                setSmell(
                    currentHome.current.smell - 2 < 0
                        ? 0
                        : currentHome.current.smell - 2
                );
            }
        }, timer * 1000);

        return () => clearInterval(interval);
    }, []);
};
