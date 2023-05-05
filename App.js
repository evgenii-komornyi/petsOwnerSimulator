import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';

import { View } from 'react-native';

import { RoutesMap } from './src/routes/routes';

import { StatusBar as Header } from './src/components/status-bar/status-bar.component';
import { Navigation } from './src/components/navigation/navigation.component.jsx';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useMainInterval } from './src/hooks/common/useMainInterval.hook';
import { useSaveGame } from './src/hooks/common/useSaveGame.hook';

import { styles } from './src/styles/global.styles';

export default () => {
    useMainInterval();

    useSaveGame();

    return (
        <SafeAreaProvider>
            <NativeRouter>
                <View style={styles.container}>
                    <Header />
                    <RoutesMap />
                    <Navigation />
                    <StatusBar hidden />
                </View>
            </NativeRouter>
        </SafeAreaProvider>
    );
};
