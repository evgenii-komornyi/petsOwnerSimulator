import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { Constants } from '../constants/constants';

let intervalId;

const tongueStore = set => ({
    isTongueVisible: false,

    showTongue: () => {
        let secondsElapsed = 0;
        const intervalDuration = 2000;

        set({
            isTongueVisible: true,
        });
        intervalId = setInterval(() => {
            secondsElapsed += 1000;
            if (secondsElapsed >= intervalDuration) {
                clearInterval(intervalId);
                set({ isTongueVisible: false });
            }
        }, 1000);
    },
});

const useTongueStore = create(devtools(tongueStore));

export default useTongueStore;
