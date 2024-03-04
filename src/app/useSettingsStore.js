import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

import { setAlarm, cancelAlarm } from '../modules/settings.module';
import {
    clearSettings,
    readFromStorage,
    saveToStorage,
} from '../helpers/storage.helper';

const settingsStore = (set, get) => ({
    isAccordionExpanded: true,
    isSoundMuted: false,

    toggleSound: async () => {
        set(state => ({ isSoundMuted: !state.isSoundMuted }));
        const settings = await readFromStorage('settings');

        await saveToStorage('settings', {
            ...settings,
            isSoundMuted: get().isSoundMuted,
        });
    },

    toggleAccordion: async () => {
        set(state => ({ isAccordionExpanded: !state.isAccordionExpanded }));
        const settings = await readFromStorage('settings');

        await saveToStorage('settings', {
            ...settings,
            isAccordionExpanded: get().isAccordionExpanded,
        });
    },

    loadSettingsFromLocalStorage: async () => {
        const settings = await readFromStorage('settings');

        if (settings) {
            const { isAccordionExpanded, isSoundMuted } = settings;

            set({
                isAccordionExpanded: JSON.parse(isAccordionExpanded),
                isSoundMuted: JSON.parse(isSoundMuted),
            });
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
