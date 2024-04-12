import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

import { setAlarm, cancelAlarm, getHelp } from '../modules/settings.module';
import {
    clearSettings,
    readFromStorage,
    saveToStorage,
} from '../helpers/storage.helper';

const settingsStore = (set, get) => ({
    isAccordionExpanded: true,
    isSoundMuted: false,
    isHelpRead: false,
    isFirstRun: true,
    help: null,
    filteredHelp: [],
    oldOwnerVersion: null,
    isLoaded: false,

    setFilteredHelp: filteredHelp => {
        set({ filteredHelp });
    },

    resetFilteredHelp: () => {
        set({ filteredHelp: [] });
    },

    getHelp: async () => {
        try {
            const data = await getHelp();

            if (data) {
                const help = JSON.parse(data);
                set({ help });
            }
        } catch (error) {
            console.error(error);
        }
    },

    setIsFirstRun: async () => {
        set({ isFirstRun: false });

        try {
            const settings = await readFromStorage('settings');

            await saveToStorage('settings', {
                ...settings,
                isFirstRun: get().isFirstRun,
            });
        } catch (error) {
            console.log(error);
        }
    },

    toggleSound: async () => {
        set(state => ({ isSoundMuted: !state.isSoundMuted }));

        try {
            const settings = await readFromStorage('settings');

            await saveToStorage('settings', {
                ...settings,
                isSoundMuted: get().isSoundMuted,
            });
        } catch (error) {
            console.log(error);
        }
    },

    toggleAccordion: async () => {
        set(state => ({ isAccordionExpanded: !state.isAccordionExpanded }));

        try {
            const settings = await readFromStorage('settings');

            await saveToStorage('settings', {
                ...settings,
                isAccordionExpanded: get().isAccordionExpanded,
            });
        } catch (error) {
            console.error(error);
        }
    },

    loadSettingsFromLocalStorage: async () => {
        try {
            const settings = await readFromStorage('settings');
            const meta = await readFromStorage('meta');

            if (settings) {
                const { isAccordionExpanded, isSoundMuted, isFirstRun } =
                    settings;

                if (isAccordionExpanded !== undefined) {
                    set({
                        isAccordionExpanded: JSON.parse(isAccordionExpanded),
                    });
                }

                if (isSoundMuted !== undefined) {
                    set({ isSoundMuted: JSON.parse(isSoundMuted) });
                }

                if (isFirstRun !== undefined) {
                    set({ isFirstRun: JSON.parse(isFirstRun) });
                }
            }

            if (meta) {
                const { oldOwnerVersion } = meta;

                if (oldOwnerVersion !== undefined) {
                    set({ oldOwnerVersion: JSON.parse(oldOwnerVersion) });
                }
            }

            set({ isLoaded: true });
        } catch (error) {
            console.error(error);
        }
    },

    clearSettings: async () => {
        await clearSettings();
    },

    activateAlarm: async (id, hours, minutes) => {
        await setAlarm(id, hours, minutes);
    },

    deactivateAlarm: async id => {
        await cancelAlarm(id);
    },
});

const useSettingsStore = create(devtools(settingsStore));

export default useSettingsStore;
