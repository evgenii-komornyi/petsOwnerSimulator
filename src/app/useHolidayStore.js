import { create } from 'zustand';

import { devtools } from 'zustand/middleware';
import { checkHoliday } from '../modules/holidays.module';

import { Constants } from '../constants/constants';

const holidayStore = set => ({
    holiday: null,
    decorations: [],
    carpet: [],
    frames: [],

    isLoaded: false,

    checkHoliday: async () => {
        try {
            const data = await checkHoliday();

            if (data) {
                const holiday = JSON.parse(data);

                if (holiday !== null) {
                    set({ holiday: holiday.holiday });
                }

                if (
                    holiday !== null &&
                    holiday.images &&
                    holiday.images.length
                ) {
                    set({
                        decorations: holiday.images.filter(
                            image => image.category === Constants.DECOR
                        ),
                        carpet: holiday.images.filter(
                            image => image.category === Constants.CARPET
                        ),
                        frames: holiday.images.filter(
                            image => image.category === Constants.FRAMES
                        ),
                    });
                }
                set({ isLoaded: true });
            }
        } catch (error) {
            console.error(error);
        }
    },
});

const useHolidayStore = create(devtools(holidayStore));

export default useHolidayStore;
