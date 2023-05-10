import { useEffect } from 'react';
import { AppState } from 'react-native';
import useOwnerStore from '../../app/useOwnerStore';

export const useSaveLoadGame = () => {
    const { saveGame, loadGame, isLoaded } = useOwnerStore(state => state);

    useEffect(() => {
        const handleAppStateChange = nextAppState => {
            if (nextAppState === 'background' || nextAppState === 'inactive') {
                saveGame();
            }
        };

        AppState.addEventListener('change', handleAppStateChange);

        loadGame();

        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);

    return isLoaded;
};
