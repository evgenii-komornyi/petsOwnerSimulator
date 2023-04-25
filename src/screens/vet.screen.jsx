import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useOnBackPress } from '../hooks/common/useOnBackPress.hook';

export const VetScreen = () => {
    useOnBackPress();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vet</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE4E1',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});
