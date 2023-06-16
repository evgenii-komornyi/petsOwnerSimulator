import { Constants } from '../constants/constants';
import { isObjectExists } from './objects.helper';

export const calculateOwnerAfterLoading = (saveMomentString, owner) => {
    const saveMoment = createDateTime(saveMomentString);
    const loadMoment = createDateTime();

    const saveMomentInSeconds = convertDateTimeToSeconds(saveMoment);
    const loadMomentInSeconds = convertDateTimeToSeconds(loadMoment);

    const difference = loadMomentInSeconds - saveMomentInSeconds;

    const offlinePeriod = Math.floor(difference / Constants.MAIN_INTERVAL);

    const calculatedOwnerBetweenSaveAndLoadMoments =
        calculateOwnerBetweenSaveAndLoadMoments(owner, offlinePeriod);

    return calculatedOwnerBetweenSaveAndLoadMoments;
};

const createDateTime = (dateString = undefined) => {
    return dateString ? new Date(dateString) : new Date();
};

const convertDateTimeToSeconds = dateTime => {
    return Math.floor(dateTime.getTime() / 1000);
};

const calculateOwnerBetweenSaveAndLoadMoments = (owner, offlinePeriod) => {
    const calculatedPetsBetweenSaveAndLoadMoments =
        calculatePetsBetweenSaveAndLoadMoments(owner.pets, offlinePeriod);

    const newHPC = calculateHappyPetCoins(
        owner.happyPetCoins,
        calculatedPetsBetweenSaveAndLoadMoments,
        offlinePeriod
    );

    let newOwner = {
        ...owner,
        happyPetCoins: newHPC,
        pets: calculatedPetsBetweenSaveAndLoadMoments,
    };

    if (!isObjectExists(owner.litterBox) || owner.litterBox.slots === 0) {
        const newImpurity = calculateImpurity(
            owner.home.impurity,
            calculatedPetsBetweenSaveAndLoadMoments
        );

        // const newSmell = calculateSmell(
        //     owner.home.smell,
        //     calculatedPetsBetweenSaveAndLoadMoments,
        //     newImpurity,
        //     offlinePeriod
        // );

        newOwner = {
            ...newOwner,
            home: { ...owner.home, impurity: newImpurity },
        };
    } else {
        const newLitterBoxSlotsCount = calculateLitterBoxSlotsCount(
            owner.litterBox.slots,
            calculatedPetsBetweenSaveAndLoadMoments
        );

        newOwner = {
            ...newOwner,
            litterBox: { ...owner.litterBox, slots: newLitterBoxSlotsCount },
        };
    }

    return newOwner;
};

const calculateHappyPetCoins = (happyPetCoins, pets, offlinePeriod) => {
    let HPC = happyPetCoins;

    pets.map(pet => {
        const maxIntervalsPetHappy = Math.floor(
            pet.stats.mood / pet.statsReducing.mood
        );

        const minTimeHappyPet = Math.min(maxIntervalsPetHappy, offlinePeriod);
        HPC += minTimeHappyPet * Constants.HPC_INCREASE;
    });

    return HPC;
};

const calculateImpurity = (savedImpurity, pets) => {
    let newImpurity = savedImpurity;

    pets.map(pet => {
        if (pet.stats.digestion === 0) {
            newImpurity += 1;
        }
    });

    return newImpurity;
};

// const calculateSmell = (savedSmell, pets, currentImpurity, offlinePeriod) => {
//     let calculatedSmell = savedSmell * offlinePeriod;

//     pets.map(pet => {
//         const digestionPeriodFormula =
//             pet.stats.digestion / pet.statsReducing.digestion;

//         // const digestionPeriod =
//     });

//     const smellDuration = offlinePeriod - digestionPeriod;

//     calculatedSmell = savedSmell + currentImpurity * smellDuration;

//     return calculatedSmell;
// };

const calculateLitterBoxSlotsCount = (savedSlots, pets) => {
    let newSlotsCount = savedSlots;

    pets.map(pet => {
        if (pet.stats.digestion === 0) {
            newSlotsCount = newSlotsCount > 0 ? newSlotsCount - 1 : 0;
        }
    });

    return newSlotsCount;
};

const calculatePetsBetweenSaveAndLoadMoments = (pets, offlinePeriod) => {
    return pets.map(pet => {
        const newHealth = calculateHealth(
            pet.stats.health,
            pet.statsReducing.health,
            pet.stats.satiety,
            pet.statsReducing.satiety,
            offlinePeriod
        );

        const newSatiety = calculateSatiety(
            pet.stats.satiety,
            pet.statsReducing.satiety,
            offlinePeriod
        );

        const newMood = calculateMood(
            pet.stats.mood,
            pet.statsReducing.mood,
            offlinePeriod
        );

        const newDigestion = calculateDigestion(
            pet.stats.digestion,
            pet.statsReducing.digestion,
            offlinePeriod
        );

        return {
            ...pet,
            stats: {
                health: newHealth,
                satiety: newSatiety,
                mood: newMood,
                digestion: newDigestion,
            },
        };
    });
};

const calculateHealth = (
    health,
    healthReducing,
    satiety,
    satietyReducing,
    offlinePeriod
) => {
    let healthUpPeriod = 0;

    if (satiety > Constants.HEALTH_UP_THRESHOLD) {
        healthUpPeriod = Math.min(
            offlinePeriod,
            (satiety - Constants.HEALTH_UP_THRESHOLD) / satietyReducing
        );
    }

    let healthStandByPeriod = 0;

    if (
        satiety > Constants.HEALTH_UP_THRESHOLD &&
        offlinePeriod > healthUpPeriod
    ) {
        healthStandByPeriod = Math.min(
            offlinePeriod - healthUpPeriod,
            Constants.HEALTH_UP_THRESHOLD / satietyReducing
        );
    } else if (satiety > 0 && satiety <= Constants.HEALTH_UP_THRESHOLD) {
        healthStandByPeriod = Math.min(
            satiety / satietyReducing,
            offlinePeriod
        );
    }

    const healthDownPeriodFormula =
        offlinePeriod - healthUpPeriod - healthStandByPeriod;

    const healthDownPeriod =
        healthDownPeriodFormula < 0 ? 0 : healthDownPeriodFormula;

    const maxHealthFormula = health + healthUpPeriod;

    const maxHealth =
        maxHealthFormula >= Constants.MAX_HEALTH_LEVEL
            ? Constants.MAX_HEALTH_LEVEL
            : maxHealthFormula;

    const calculatedHealth = maxHealth - healthDownPeriod * healthReducing;

    return calculatedHealth < 0 ? 0 : calculatedHealth;
};

const calculateSatiety = (satiety, satietyReducing, offlinePeriod) => {
    const calculatedSatiety = satiety - offlinePeriod * satietyReducing;

    return calculatedSatiety <= 0 ? 0 : calculatedSatiety;
};

const calculateMood = (mood, moodReducing, offlinePeriod) => {
    const calculatedMood = mood - offlinePeriod * moodReducing;

    return calculatedMood <= 0 ? 0 : calculatedMood;
};

const calculateDigestion = (digestion, digestionReducing, offlinePeriod) => {
    const calculatedDigestion = digestion - offlinePeriod * digestionReducing;

    return calculatedDigestion <= 0 ? 0 : calculatedDigestion;
};
