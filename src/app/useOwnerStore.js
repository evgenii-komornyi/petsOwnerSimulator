import { create } from 'zustand';

import { devtools } from 'zustand/middleware';
import { Constants } from '../constants/constants';

import { addItem } from '../helpers/itemsManipulations.helper';
import {
    modifyPetStat,
    modifyItemStat,
} from '../helpers/petsManipulations.helper';

const ownerStore = (set, get) => ({
    happyPetCoins: 100.0,
    home: {
        image: { uri: 'asset:/images/backgrounds/home/room.png' },
        isWindowOpen: false,
        impurity: 0,
        smell: 0,
    },
    pets: [],
    food: [],
    toys: [],
    litterBox: {},
    catHouse: {},

    setHappyPetCoins: newValue => {
        set({ happyPetCoins: newValue });
    },
    adoptPet: pet => {
        set(state => ({ ...state, pets: [...state.pets, pet] }));
    },
    buyItem: newItem => {
        const existingState = get()[newItem.type];
        if (Array.isArray(existingState)) {
            set({ [newItem.type]: addItem(existingState, newItem) });
        } else if (typeof existingState === 'object') {
            set({ [newItem.type]: newItem });
        }
    },
    setHungerLevel: (id, newHungerLevel) => {
        const modifiedPets = modifyPetStat(
            id,
            get().pets,
            Constants.stats.HUNGER,
            newHungerLevel
        );

        set({ pets: modifiedPets });
    },
    setHealthLevel: (id, newHealthLevel) => {
        const modifiedPets = modifyPetStat(
            id,
            get().pets,
            Constants.stats.HEALTH,
            newHealthLevel
        );

        set({ pets: modifiedPets });
    },
    setMoodLevel: (id, newMoodLevel) => {
        const modifiedPets = modifyPetStat(
            id,
            get().pets,
            Constants.stats.MOOD,
            newMoodLevel
        );

        set({ pets: modifiedPets });
    },
    setDigestionLevel: (id, newDigestionLevel) => {
        const modifiedPets = modifyPetStat(
            id,
            get().pets,
            Constants.stats.DIGESTION,
            newDigestionLevel
        );

        set({ pets: modifiedPets });
    },
    feedPet: (id, currentFoodLevel, item) => {
        const newValue = currentFoodLevel + item.satisfaction;

        const modifiedPets = modifyPetStat(
            id,
            get().pets,
            Constants.stats.HUNGER,
            newValue >= Constants.MAX_FOOD_LEVEL
                ? Constants.MAX_FOOD_LEVEL
                : newValue
        );

        const modifiedItems = modifyItemStat(
            item.id,
            get().food,
            'count',
            item.count - 1
        );

        set({ pets: modifiedPets, food: modifiedItems });
    },
    poopInLitterBox: () => {
        set(state => ({
            ...state,
            litterBox: {
                ...state.litterBox,
                slots:
                    state.litterBox.slots !== 0 ? state.litterBox.slots - 1 : 0,
            },
        }));
    },
    poopOnCarpet: () => {
        set(state => ({
            ...state,
            home: {
                ...state.home,
                impurity:
                    state.home.impurity > Constants.MAX_HOME_IMPURITY
                        ? Constants.MAX_HOME_IMPURITY
                        : state.home.impurity + 1,
            },
        }));
    },
    cleanRoom: () => {
        set(state => ({ ...state, home: { ...state.home, impurity: 0 } }));
    },
    cleanLitterBox: () => {
        set(state => ({
            ...state,
            litterBox: {
                ...state.litterBox,
                slots: Constants.MAX_LITTER_SLOTS,
            },
        }));
    },
    openCloseWindow: () => {
        set(state => ({
            ...state,
            home: { ...state.home, isWindowOpen: !state.home.isWindowOpen },
        }));
    },
    setSmell: newSmellValue => {
        set(state => ({
            ...state,
            home: { ...state.home, smell: newSmellValue },
        }));
    },
    sayGoodbye: id => {
        set(state => ({
            ...state,
            pets: state.pets.map(pet => {
                if (pet.id === id) {
                    return { ...pet, wasTaken: true };
                }
                return pet;
            }),
        }));
    },
});

const useOwnerStore = create(devtools(ownerStore));

export default useOwnerStore;
