import { Constants } from '../constants/constants';

export const icons = {
    health: {
        full: { uri: 'asset:/icons/heart_full.png' },
        empty: { uri: 'asset:/icons/heart_empty.png' },
    },
    satiety: {
        full: { uri: 'asset:/icons/food_full.png' },
        empty: { uri: 'asset:/icons/food_empty.png' },
    },
    mood: {
        full: { uri: 'asset:/icons/mood_full.png' },
        empty: { uri: 'asset:/icons/mood_empty.png' },
    },
    happyPetCoins: { uri: 'asset:/icons/happypetcoins.png' },
    hydration: { noHydro: { uri: 'asset:/icons/hydration.png' } },
};

export const iconByStat = {
    satisfaction: {
        icon: 'triangle-up',
        color: 'black',
        type: Constants.ENTYPO_ICON,
    },
    damage: {
        icon: 'triangle-down',
        color: 'black',
        type: Constants.ENTYPO_ICON,
    },
    happiness: {
        icon: 'triangle-up',
        color: 'black',
        type: Constants.ENTYPO_ICON,
    },
    durability: {
        icon: 'shield',
        color: 'black',
        type: Constants.MATERIALICONS_ICON,
    },
    maxSlots: {
        icon: 'time-slot',
        color: 'black',
        type: Constants.ENTYPO_ICON,
    },
};
