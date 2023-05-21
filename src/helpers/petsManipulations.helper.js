import { Constants } from '../constants/constants';

export const modifyPetStat = (id, pets, statToModify, newStatValue) => {
    const petToModify = findObjectById(id, pets);
    petToModify.stats[statToModify] = newStatValue;

    return pets;
};

export const modifyItemStat = (id, items, statToModify, newStatValue) => {
    const itemToModify = findObjectById(id, items);
    itemToModify[statToModify] = newStatValue;

    return items;
};

export const checkStatsToReturnCorrectImage = (stats, img) => {
    if (stats.health === 0) {
        return img.dead;
    }

    if (stats.mood === 0) {
        return img.sad;
    }

    return img.regular;
};

export const calculatePetsStatsAfterLoading = (saveMomentString, owner) => {
    const saveMoment = createDateTime(saveMomentString);
    const loadMoment = createDateTime();

    const saveMomentInSeconds = convertDateTimeToSeconds(saveMoment);
    const loadMomentInSeconds = convertDateTimeToSeconds(loadMoment);

    const difference = loadMomentInSeconds - saveMomentInSeconds;

    const totalIntervalsInDifference = Math.floor(
        difference / Constants.MAIN_INTERVAL
    );

    const calculatedPetsBetweenSaveAndLoadMoments =
        calculatePetsBetweenSaveAndLoadMoments(
            owner,
            totalIntervalsInDifference
        );

    console.log(totalIntervalsInDifference);
    console.log(owner.pets);
    console.log(calculatedPetsBetweenSaveAndLoadMoments);
};

const findObjectById = (id, array) => array.find(item => item.id === id);

const createDateTime = (dateString = undefined) => {
    return dateString ? new Date(dateString) : new Date();
};

const convertDateTimeToSeconds = dateTime => {
    return Math.floor(dateTime.getTime() / 1000);
};

const calculatePetsBetweenSaveAndLoadMoments = (
    owner,
    totalIntervalsInDifference
) => {
    return owner.pets.map(pet => {
        const newHealth = calculateHealth(
            pet.stats.health,
            pet.statsReducing.health,
            pet.stats.satiety,
            pet.statsReducing.satiety,
            totalIntervalsInDifference
        );

        const newSatiety = calculateSatiety(
            pet.stats.satiety,
            pet.statsReducing.satiety,
            totalIntervalsInDifference
        );

        const newMood = calculateMood(
            pet.stats.mood,
            pet.statsReducing.mood,
            totalIntervalsInDifference
        );

        const newDigestion = calculateDigestion(
            pet.stats.digestion,
            pet.statsReducing.digestion,
            totalIntervalsInDifference
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
    totalIntervalsInDifference
) => {
    const healthUpPeriodFormulae =
        (satiety - Constants.HEALTH_UP_THRESHOLD) / satietyReducing;

    const healthUpPeriod =
        healthUpPeriodFormulae > totalIntervalsInDifference
            ? totalIntervalsInDifference
            : healthUpPeriodFormulae;

    const isTotalIntervalsLessThanHealthUpPeriod =
        totalIntervalsInDifference < healthUpPeriod;

    const healthStandByPeriod = isTotalIntervalsLessThanHealthUpPeriod
        ? 0
        : Constants.HEALTH_UP_THRESHOLD / satietyReducing;

    const healthDownPeriod = isTotalIntervalsLessThanHealthUpPeriod
        ? 0
        : totalIntervalsInDifference - healthUpPeriod + healthStandByPeriod;

    const maxHealthFormulae = health + healthUpPeriod;

    const maxHealth =
        maxHealthFormulae >= Constants.MAX_HEALTH_LEVEL
            ? Constants.MAX_HEALTH_LEVEL
            : maxHealthFormulae;

    const calculatedHealth = maxHealth - healthDownPeriod * healthReducing;

    return calculatedHealth <= 0 ? 0 : calculatedHealth;
};

const calculateSatiety = (
    satiety,
    satietyReducing,
    totalIntervalsInDifference
) => {
    const calculatedSatiety =
        satiety - totalIntervalsInDifference * satietyReducing;

    return calculatedSatiety <= 0 ? 0 : calculatedSatiety;
};

const calculateMood = (mood, moodReducing, totalIntervalsInDifference) => {
    const calculatedMood = mood - totalIntervalsInDifference * moodReducing;

    return calculatedMood <= 0 ? 0 : calculatedMood;
};

const calculateDigestion = (
    digestion,
    digestionReducing,
    totalIntervalsInDifference
) => {
    const calculatedDigestion =
        digestion - totalIntervalsInDifference * digestionReducing;

    return calculatedDigestion <= 0 ? 0 : calculatedDigestion;
};
