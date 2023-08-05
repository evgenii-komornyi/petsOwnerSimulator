import { create } from 'zustand';
import { NativeModules } from 'react-native';

import { readFromStorage, saveToStorage } from '../helpers/storage.helper';

import { devtools } from 'zustand/middleware';
import { Constants } from '../constants/constants';

import { addItem } from '../helpers/itemsManipulations.helper';
import { convertPets } from '../helpers/petsManipulations.helper';

import { loadGame, saveGame } from '../modules/game.module';
import {
    adoptPet,
    buyItem,
    cleanLitterBox,
    cleanRoom,
    feedPet,
    getCurrentOwner,
    interactWithWindow,
    petPet,
    sayGoodbye,
    setHPC,
} from '../modules/owner.module';
import { calculatePetsStats } from '../modules/pets.module';
import { calculateHomeStats } from '../modules/home.module';

const ownerStore = (set, get) => ({
    name: '',
    happyPetCoins: 100.0,
    home: {},
    pets: [],
    inventory: {},
    alert: {},

    isLoaded: false,

    getCurrentOwner: async () => {
        try {
            const owner = await getCurrentOwner();

            if (owner) {
                const { happyPetCoins, pets, name, inventory, home } =
                    JSON.parse(owner);

                const convertedPets = convertPets(pets);

                set({
                    happyPetCoins,
                    pets: convertedPets,
                    name,
                    inventory,
                    home,
                    alert,
                });

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
            const { happyPetCoins, pets, name, inventory, home } =
                JSON.parse(owner);

            const convertedPets = convertPets(pets);

            set({ happyPetCoins, pets: convertedPets, name, inventory, home });

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
    feedPet: async (petId, itemId) => {
        try {
            const data = await feedPet(petId, itemId);

            if (data) {
                const { pets, inventory } = JSON.parse(data);
                const convertedPets = convertPets(pets);

                set({ pets: convertedPets, inventory });
            }
        } catch (error) {
            console.error(error);
        }
    },
    petPet: async (petId, swipeDirection) => {
        try {
            const data = await petPet(petId, swipeDirection);

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
    interactWithWindow: async () => {
        try {
            const data = await interactWithWindow();

            if (data) {
                const { home } = JSON.parse(data);

                set({ home });
            }
        } catch (error) {
            console.error(error);
        }
    },
    cleanRoom: async () => {
        try {
            const data = await cleanRoom();

            if (data) {
                const { home } = JSON.parse(data);

                set({ home });
            }
        } catch (error) {
            console.error(error);
        }
    },

    cleanLitterBox: async () => {
        try {
            const data = await cleanLitterBox();

            if (data) {
                const { inventory } = JSON.parse(data);

                set({ inventory });
            }
        } catch (error) {
            console.error(error);
        }
    },

    calculatePetsStats: async () => {
        try {
            const data = await calculatePetsStats();

            if (data) {
                const { pets, alert } = JSON.parse(data);
                const convertedPets = convertPets(pets);

                set({ pets: convertedPets, alert });
            }
        } catch (error) {
            console.error(error);
        }
    },

    calculateHomeStats: async () => {
        try {
            const data = await calculateHomeStats();

            if (data) {
                const { home } = JSON.parse(data);

                set({ home });
            }
        } catch (error) {
            console.error(error);
        }
    },

    sayGoodbye: async petId => {
        try {
            const data = await sayGoodbye(petId);

            if (data) {
                const owner = JSON.parse(data);
                const convertedPets = convertPets(owner.pets);

                set({ pets: convertedPets });
            }
        } catch (error) {
            console.error(error);
        }
    },
});

const useOwnerStore = create(devtools(ownerStore));

export default useOwnerStore;
