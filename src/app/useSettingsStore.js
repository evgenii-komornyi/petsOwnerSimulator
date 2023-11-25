import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

import { setAlarm, cancelAlarm } from '../modules/settings.module';
import { readFromStorage, saveToStorage } from '../helpers/storage.helper';

const settingsStore = (set, get) => ({
    isAccordionExpanded: true,

    toggleAccordion: async () => {
        set(state => ({ isAccordionExpanded: !state.isAccordionExpanded }));

        await saveToStorage('settings', {
            isAccordionExpanded: get().isAccordionExpanded,
        });
    },

    loadSettingsFromLocalStorage: async () => {
        const settings = await readFromStorage('settings');

        if (settings) {
            const { isAccordionExpanded } = settings;

            set({ isAccordionExpanded: JSON.parse(isAccordionExpanded) });
        }
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
