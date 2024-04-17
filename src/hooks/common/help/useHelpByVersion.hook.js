import { useEffect } from 'react';
import useOwnerStore from '../../../app/useOwnerStore';
import useSettingsStore from '../../../app/useSettingsStore';

export const useHelpByVersion = () => {
    const { version: currentOwnerVersion } = useOwnerStore(state => state);
    const {
        help,
        oldOwnerVersion,
        filteredHelp: filteredHelpByVersion,
        setFilteredHelp: setFilteredHelpByVersion,
        setOldOwnerVersion,
        resetFilteredHelp,
    } = useSettingsStore(state => state);

    useEffect(() => {
        if (oldOwnerVersion !== null) {
            if (currentOwnerVersion > oldOwnerVersion) {
                setFilteredHelpByVersion(
                    help.filter(
                        helpItem =>
                            oldOwnerVersion < helpItem.introductionVersion
                    )
                );
            }
        }

        return () => {
            setOldOwnerVersion(currentOwnerVersion);
            resetFilteredHelp();
        };
    }, [oldOwnerVersion]);

    return {
        filteredHelpByVersion,
        currentOwnerVersion,
        oldOwnerVersion,
        resetFilteredHelp,
    };
};
