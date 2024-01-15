import { useEffect } from 'react';
import { AppState } from 'react-native';
import useOwnerStore from '../../app/useOwnerStore';
import useSettingsStore from '../../app/useSettingsStore';
import { hideAsync } from 'expo-splash-screen';

export const useSaveLoadGame = () => {
    const { saveGame, loadGame, isLoaded } = useOwnerStore(state => state);
    const { loadSettingsFromLocalStorage } = useSettingsStore(state => state);

    useEffect(() => {
        const handleAppStateChange = async nextAppState => {
            if (nextAppState === 'background' || nextAppState === 'inactive') {
                await saveGame();
            } else {
                await loadGame();
            }
        };

        AppState.addEventListener('change', handleAppStateChange);

        loadGame().then(_ => hideAsync());
        loadSettingsFromLocalStorage();

        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);

    return isLoaded;
};
