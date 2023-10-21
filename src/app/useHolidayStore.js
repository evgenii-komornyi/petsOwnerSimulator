import { create } from 'zustand';

import { devtools } from 'zustand/middleware';
import { checkHoliday } from '../modules/holidays.module';

import { Constants } from '../constants/constants';

const holidayStore = set => ({
    holiday: null,
    decorations: [],
    carpet: [],
    frames: [],

    checkHoliday: async () => {
        const data = await checkHoliday();

        if (data) {
            const holiday = JSON.parse(data);

            set({ holiday: holiday.holiday });

            if (holiday.images && holiday.images.length) {
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
        }
    },
});

const useHolidayStore = create(devtools(holidayStore));

export default useHolidayStore;
