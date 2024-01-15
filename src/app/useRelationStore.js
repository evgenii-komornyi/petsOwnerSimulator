import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const relationStore = set => ({
    containerHeight: 0,
    images: {},

    setContainerHeight: height => {
        set({ containerHeight: height });
    },

    setImages: images => {
        set({ images });
    },
});

const useRelationStore = create(devtools(relationStore));

export default useRelationStore;
