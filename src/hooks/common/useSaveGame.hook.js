import { useEffect } from 'react';
import { AppState } from 'react-native';
import useOwnerStore from '../../app/useOwnerStore';

export const useSaveGame = () => {
    const { saveGame, loadGame } = useOwnerStore();

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
};
