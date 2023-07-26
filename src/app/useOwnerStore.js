import { create } from 'zustand';
import { NativeModules } from 'react-native';

import { readFromStorage, saveToStorage } from '../helpers/storage.helper';

import { devtools } from 'zustand/middleware';
import { Constants } from '../constants/constants';

import { addItem } from '../helpers/itemsManipulations.helper';
import {
    modifyPetStat,
    modifyItemStat,
    convertPets,
} from '../helpers/petsManipulations.helper';

import { calculateOwnerAfterLoading } from '../helpers/load-game.helper';
import { loadGame, saveGame } from '../modules/game.module';
import {
    adoptPet,
    buyItem,
    getCurrentOwner,
    setHPC,
} from '../modules/owner.module';

const ownerStore = (set, get) => ({
    name: '',
    happyPetCoins: 100.0,
    home: {
        image: { uri: 'asset:/images/backgrounds/home/room.png' },
        isWindowOpen: false,
        impurity: 0,
        smell: 0,
    },
    pets: [],
    inventory: {},

    isLoaded: false,

    getCurrentOwner: async () => {
        try {
            const owner = await getCurrentOwner();

            if (owner) {
                const { happyPetCoins, pets, name, inventory } =
                    JSON.parse(owner);

                const convertedPets = convertPets(pets);

                set({ happyPetCoins, pets: convertedPets, name, inventory });

                setTimeout(() => {
                    set({ isLoaded: true });
                }, 2000);
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    // saveGame: () => {
    //     const {
    //         happyPetCoins,
    //         home,
    //         pets,
    //         food,
    //         toys,
    //         litterBox,
    //         catHouse,
    //         meta,
    //     } = get();

    //     saveToStorage('owner', {
    //         happyPetCoins,
    //         home,
    //         pets,
    //         food,
    //         toys,
    //         litterBox,
    //         catHouse,
    //     });

    //     saveToStorage('meta', meta);
    //     saveToStorage('meta', {
    //         ...meta,
    //         saveMoment: new Date().toUTCString(),
    //     });
    // },
    loadGameFromModule: async () => {
        const owner = await loadGame();

        if (owner) {
            const { happyPetCoins, pets, name, inventory } = JSON.parse(owner);

            const convertedPets = convertPets(pets);

            set({ happyPetCoins, pets: convertedPets, name, inventory });

            setTimeout(() => {
                set({ isLoaded: true });
            }, 2000);
        }
    },
    saveGameFromModule: () => {
        saveGame();
    },
    // loadGame: async () => {
    //     try {
    //         const ownerFromStorage = await readFromStorage('owner');
    //         const meta = await readFromStorage('meta');

    //         let calculatedOwner = null;

    //         if (meta !== null) {
    //             set({ meta: meta });

    //             calculatedOwner = calculateOwnerAfterLoading(
    //                 meta.saveMoment,
    //                 ownerFromStorage
    //             );
    //         }

    //         if (calculatedOwner !== null) {
    //             const {
    //                 happyPetCoins,
    //                 home,
    //                 pets,
    //                 food,
    //                 toys,
    //                 litterBox,
    //                 catHouse,
    //             } = calculatedOwner;

    //             set({
    //                 happyPetCoins,
    //                 home,
    //                 pets,
    //                 food,
    //                 toys,
    //                 litterBox,
    //                 catHouse,
    //             });

    //             set({ meta: meta });
    //         }

    //         setTimeout(() => {
    //             set({ isLoaded: true });
    //         }, 2000);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // },
    setHappyPetCoins: async () => {
        try {
            const data = await setHPC();

            if (data) {
                const happyPetCoins = JSON.parse(data);

                set({ happyPetCoins });
            }
        } catch (error) {
            console.error(error);
        }
    },
    adoptPet: async (petType, pet) => {
        try {
            const data = await adoptPet(petType, JSON.stringify(pet));

            if (data) {
                const { pets } = JSON.parse(data);

                const convertedPets = convertPets(pets);

                set({ pets: convertedPets });
            }
        } catch (error) {
            console.error(error);
        }
    },
    buyItem: async newItem => {
        try {
            const data = await buyItem(newItem.type, JSON.stringify(newItem));

            if (data) {
                const { happyPetCoins, inventory } = JSON.parse(data);

                set({ happyPetCoins, inventory });
            }
        } catch (error) {
            console.error(error);
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
    poopInLitterBox: newSlotsCount => {
        set(state => ({
            ...state,
            litterBox: {
                ...state.litterBox,
                slots: newSlotsCount,
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
                        : state.home.impurity +
                          Constants.HOME_IMPURITY_INCREASE,
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
