import { useEffect } from 'react';
import { AppState } from 'react-native';
import useOwnerStore from '../../app/useOwnerStore';

export const useSaveLoadGame = () => {
    const {
        saveGame,
        loadGame,
        loadGameFromModule,
        saveGameFromModule,
        isLoaded,
    } = useOwnerStore(state => state);

    useEffect(() => {
        const handleAppStateChange = async nextAppState => {
            if (nextAppState === 'background' || nextAppState === 'inactive') {
                // saveGame();
                await saveGameFromModule();
            }
        };

        AppState.addEventListener('change', handleAppStateChange);

        // loadGame();
        loadGameFromModule();

        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);

    return isLoaded;
};
