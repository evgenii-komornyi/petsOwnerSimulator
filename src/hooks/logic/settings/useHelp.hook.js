import { useState } from 'react';
import useSettingsStore from '../../../app/useSettingsStore';

export const useHelp = () => {
    const {
        help,
        filteredHelp: filteredHelpByTag,
        setFilteredHelp: setFilteredHelpByTag,
    } = useSettingsStore(state => state);

    const [isExpanded, setIsExpanded] = useState([]);

    const toggleAccordion = id => {
        if (isExpanded.includes(id)) {
            setIsExpanded(isExpanded.filter(item => item !== id));
        } else {
            setIsExpanded([...isExpanded, id]);
        }
    };

    const checkStartsWith = text => text.startsWith('sub-');

    const compileArrayByTag = tag => {
        setFilteredHelpByTag(
            help.flatMap(item =>
                item.tags.includes(tag.toLowerCase()) ? item : []
            )
        );
    };

    return {
        filteredHelpByTag,
        isExpanded,
        toggleAccordion,
        checkStartsWith,
        compileArrayByTag,
    };
};
