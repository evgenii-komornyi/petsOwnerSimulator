import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { preventAutoHideAsync } from 'expo-splash-screen';
import { NativeRouter } from 'react-router-native';

import { View } from 'react-native';

import { RoutesMap } from './src/routes/routes';

import { StatusBar as Header } from './src/components/status-bar/status-bar.component';
import { Navigation } from './src/components/navigation/navigation.component.jsx';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useMainInterval } from './src/hooks/common/useMainInterval.hook';
import { useSaveLoadGame } from './src/hooks/common/useSaveLoadGame.hook';

import { Loader } from './src/components/loader/loader.component';

import { loaders } from './src/data/loaders';
import { styles } from './src/styles/global.styles';

preventAutoHideAsync();

export default () => {
    const { isHolidaysLoaded } = useMainInterval();
    const isLoaded = useSaveLoadGame();

    return (
        <SafeAreaProvider>
            <NativeRouter>
                {isLoaded && isHolidaysLoaded ? (
                    <View style={styles.container}>
                        <Header />
                        <RoutesMap />
                        <Navigation />
                        <StatusBar hidden />
                    </View>
                ) : (
                    <Loader sourceFile={loaders.loading} />
                )}
            </NativeRouter>
        </SafeAreaProvider>
    );
};
