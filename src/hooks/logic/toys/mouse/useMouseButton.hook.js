import { useState } from 'react';
import useOwnerStore from '../../../../app/useOwnerStore';

export const useMouseButton = () => {
    const { toy } = useOwnerStore(state => state.home.livingRoom);
    const [isBadgeVisible, setIsBadgeVisible] = useState(false);

    const toggleDurabilityBadge = () => {
        setIsBadgeVisible(prevState => !prevState);
    };

    return { toy, toggleDurabilityBadge, isBadgeVisible };
};
