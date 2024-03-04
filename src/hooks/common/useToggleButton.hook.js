import { useState } from 'react';

export const useToggleButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggle = () => {
        setIsExpanded(prev => !prev);
    };

    return { isExpanded, toggle };
};
