import { create } from 'zustand';

import { devtools } from 'zustand/middleware';
import { getShelter } from '../modules/shelter.module';

const shelterStore = set => ({
    shelter: {},
    isLoaded: false,

    loadShelter: async () => {
        const data = await getShelter();

        if (data) {
            set({ shelter: JSON.parse(data), isLoaded: true });
        }
    },
});

const useShelterStore = create(devtools(shelterStore));

export default useShelterStore;
