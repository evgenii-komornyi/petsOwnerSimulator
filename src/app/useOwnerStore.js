import { create } from 'zustand';

import { readFromStorage, saveToStorage } from '../helpers/storage.helper';

import { devtools } from 'zustand/middleware';
import { Constants } from '../constants/constants';

import { addItem } from '../helpers/itemsManipulations.helper';
import {
    modifyPetStat,
    modifyItemStat,
    calculatePetsStatsAfterLoading,
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

    meta: {
        saveMoment: null,
        FUE: {
            petsScreen: true,
            homeScreen: true,
            shopScreen: true,
            vetScreen: true,
            carouselScreen: true,
        },
    },

    isLoaded: false,

    saveGame: () => {
        const {
            happyPetCoins,
            home,
            pets,
            food,
            toys,
            litterBox,
            catHouse,
            meta,
        } = get();

        saveToStorage('owner', {
            happyPetCoins,
            home,
            pets,
            food,
            toys,
            litterBox,
            catHouse,
        });

        saveToStorage('meta', meta);
        saveToStorage('meta', {
            ...meta,
            saveMoment: new Date().toUTCString(),
        });
    },
    loadGame: async () => {
        try {
            const owner = await readFromStorage('owner');
            const meta = await readFromStorage('meta');

            if (meta !== null) {
                set({ meta: meta });

                calculatePetsStatsAfterLoading(meta.saveMoment, owner);
            }

            if (owner !== null) {
                const {
                    happyPetCoins,
                    home,
                    pets,
                    food,
                    toys,
                    litterBox,
                    catHouse,
                } = owner;

                set({
                    happyPetCoins,
                    home,
                    pets,
                    food,
                    toys,
                    litterBox,
                    catHouse,
                });

                set({ meta: meta });
            }

            setTimeout(() => {
                set({ isLoaded: true });
            }, 2000);
        } catch (e) {
            console.error(e);
        }
    },
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
    setSatietyLevel: (id, newSatietyLevel) => {
        const modifiedPets = modifyPetStat(
            id,
            get().pets,
            Constants.stats.SATIETY,
            newSatietyLevel
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
    feedPet: (id, currentSatietyLevel, item) => {
        const newValue = currentSatietyLevel + item.satisfaction;

        const modifiedPets = modifyPetStat(
            id,
            get().pets,
            Constants.stats.SATIETY,
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
