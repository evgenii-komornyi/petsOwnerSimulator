import { create } from 'zustand';

import { devtools } from 'zustand/middleware';
import { getShop } from '../modules/shop.module';

const shopStore = set => ({
    shop: {},
    isLoaded: false,

    loadShop: async () => {
        const data = await getShop();

        if (data) {
            set({ shop: JSON.parse(data), isLoaded: true });
        }
    },
});

const useShopStore = create(devtools(shopStore));

export default useShopStore;
