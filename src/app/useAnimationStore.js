import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const animationStore = (set, get) => ({
    animations: {},
    generalType: '',

    configureAnimations: (petAnimation, petId) => {
        const animationKeys = Object.keys(petAnimation);
        const uniqueAnimationKeys = new Set(animationKeys);

        const updatedAnimations = get().animations;

        [...uniqueAnimationKeys].forEach(key => {
            updatedAnimations[key] = {
                ...updatedAnimations[key],
                [petId]: false,
            };
        });

        set({ animations: updatedAnimations });
    },

    startAnimation: (animationType, petId) => {
        set(state => {
            const updatedAnimations = { ...state.animations };

            if (!updatedAnimations[animationType]) {
                updatedAnimations[animationType] = {};
            }

            updatedAnimations[animationType][petId] = true;

            return {
                animations: updatedAnimations,
                generalType: animationType,
            };
        });
    },

    stopAnimation: (animationType, petId) => {
        set(state => {
            const updatedAnimations = { ...state.animations };

            if (!updatedAnimations[animationType]) {
                updatedAnimations[animationType] = {};
            }

            updatedAnimations[animationType][petId] = false;

            return { animations: updatedAnimations, generalType: '' };
        });
    },
});

const useAnimationStore = create(devtools(animationStore));

export default useAnimationStore;
