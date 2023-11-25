import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

const userStore = set => ({
    isUserSettings: false,

    toggleMenu: () => {
        set(state => ({ isUserSettings: !state.isUserSettings }));
    },
});

const useUserStore = create(devtools(userStore));

export default useUserStore;
