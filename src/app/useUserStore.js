import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

const userStore = set => ({
    isUserSettings: false,
    defaultIndexTab: -1,
    isHelpMenu: false,

    toggleMenu: () => {
        set(state => ({
            isUserSettings: !state.isUserSettings,
            defaultIndexTab: 1,
        }));
    },

    increaseIndex: () => {
        set({
            defaultIndexTab: 0,
        });
    },

    toggleHelpMenu: () => {
        set(state => ({
            isHelpMenu: !state.isHelpMenu,
        }));
    },

    resetIndex: () => {
        set({ defaultIndexTab: -1 });
    },
});

const useUserStore = create(devtools(userStore));

export default useUserStore;
