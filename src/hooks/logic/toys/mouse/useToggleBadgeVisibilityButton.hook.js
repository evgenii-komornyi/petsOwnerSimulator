import { useState } from 'react';

export const useToggleBadgeVisibilityButton = () => {
    const [isBadgeVisible, setIsBadgeVisible] = useState(false);

    const toggleDurabilityBadge = () => {
        setIsBadgeVisible(prevState => !prevState);
    };

    return { toggleDurabilityBadge, isBadgeVisible };
};
