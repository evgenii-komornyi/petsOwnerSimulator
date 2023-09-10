import { useEffect, useRef } from 'react';
import useAnimationStore from '../../../app/useAnimationStore';

export const usePets = pets => {
    const { configureAnimations } = useAnimationStore(state => state);

    useEffect(() => {
        if (pets.length !== 0) {
            pets.forEach(pet => configureAnimations(pet.animation, pet.id));
        }
    }, []);

    const flatListRef = useRef(null);

    const handleTouchStart = () => {
        flatListRef.current.setNativeProps({
            scrollEnabled: false,
        });
    };

    const handleTouchEnd = () => {
        flatListRef.current.setNativeProps({
            scrollEnabled: true,
        });
    };

    return { pets, flatListRef, handleTouchStart, handleTouchEnd };
};
