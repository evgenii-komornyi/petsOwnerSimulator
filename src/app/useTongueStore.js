import { create } from 'zustand';

import { devtools } from 'zustand/middleware';

const tongueStore = set => ({
    isTongueVisible: false,

    setIsTongueVisible: newValue => {
        set({ isTongueVisible: newValue });
    },
});

const useTongueStore = create(devtools(tongueStore));

export default useTongueStore;
