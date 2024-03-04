import { create } from 'zustand';

import { readFromStorage, saveToStorage } from '../helpers/storage.helper';

import { devtools } from 'zustand/middleware';

import { convertPets } from '../helpers/petsManipulations.helper';

import { loadGame, saveGame, resetGame } from '../modules/game.module';
import {
    adoptPet,
    buyItem,
    changeAlarmActivity,
    changeAlarmTime,
    saveNotification,
    cleanLitterBox,
    cleanRoom,
    feedPet,
    getCurrentOwner,
    interactWithWindow,
    refillAndCleanBowl,
    petPet,
    putItemInRoom,
    sayGoodbye,
    setHPC,
} from '../modules/owner.module';
import { calculatePetsStats } from '../modules/pets.module';
import { calculateHomeStats } from '../modules/home.module';

const ownerStore = (set, get) => ({
    name: '',
    happyPetCoins: 0,
    home: {},
    pets: [],
    inventory: {},
    alert: {},
    settings: {},
    version: '',
    meta: {},

    isLoaded: false,

    getCurrentOwner: async () => {
        try {
            const owner = await getCurrentOwner();

            if (owner) {
                const {
                    happyPetCoins,
                    pets,
                    name,
                    inventory,
                    home,
                    settings,
                    version,
                } = JSON.parse(owner);

                const convertedPets = convertPets(pets);

                set({
                    happyPetCoins,
                    pets: convertedPets,
                    name,
                    inventory,
                    home,
                    alert,
                    settings,
                    version,
                });

                set({ isLoaded: true });
            }
        } catch (error) {
            console.log(error.message);
        }
    },

    loadGame: async () => {
        try {
            const meta = await readFromStorage('meta');
            let owner;

            if (!meta) {
                owner = await loadGame(new Date().toUTCString());
            } else {
                owner = await loadGame(meta.saveMoment);
            }

            if (owner) {
                const {
                    happyPetCoins,
                    pets,
                    name,
                    inventory,
                    home,
                    settings,
                    version,
                } = JSON.parse(owner);

                const convertedPets = convertPets(pets);

                set({
                    happyPetCoins,
                    pets: convertedPets,
                    name,
                    inventory,
                    home,
                    settings,
                    version,
                });

                set({ isLoaded: true });
            }
        } catch (error) {
            console.error(error);
        }
    },

    saveGame: async () => {
        try {
            saveGame();
            await saveToStorage('meta', {
                ...get().meta,
                saveMoment: new Date().toUTCString(),
            });
        } catch (error) {
            console.error(error);
        }
    },

    resetGame: () => {
        set({
            name: '',
            happyPetCoins: 0,
            home: {},
            pets: [],
            inventory: {},
            alert: {},
            settings: {},
            meta: {},

            isLoaded: false,
        });

        resetGame();
    },

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
                const { happyPetCoins, inventory, home } = JSON.parse(data);

                set({ happyPetCoins, inventory, home });
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

    refillAndCleanBowl: async () => {
        try {
            const data = await refillAndCleanBowl();

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
                const { home } = JSON.parse(data);

                set({ home });
            }
        } catch (error) {
            console.error(error);
        }
    },

    putItemInRoom: async itemToPut => {
        try {
            const data = await putItemInRoom(
                itemToPut.type,
                JSON.stringify(itemToPut)
            );

            if (data) {
                const { inventory, home } = JSON.parse(data);

                set({ inventory, home });
            }
        } catch (error) {
            console.error(error);
        }
    },

    calculatePetsStats: () => {
        calculatePetsStats();
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

    saveNotification: async notificationToSave => {
        try {
            const data = await saveNotification(notificationToSave);

            if (data) {
                const { settings } = JSON.parse(data);

                set({ settings });
            }
        } catch (error) {
            console.log(error);
        }
    },

    changeAlarmTime: async (id, hours, minutes) => {
        try {
            const data = await changeAlarmTime(id, hours, minutes);

            if (data) {
                const { settings } = JSON.parse(data);

                set({ settings });
            }
        } catch (error) {
            console.log(error);
        }
    },

    changeAlarmActivity: async (id, flag) => {
        try {
            const data = await changeAlarmActivity(id, flag);

            if (data) {
                const { settings } = JSON.parse(data);

                set({ settings });
            }
        } catch (error) {
            console.log(error);
        }
    },
});

const useOwnerStore = create(devtools(ownerStore));

export default useOwnerStore;
