import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    statusBarContainer: {
        backgroundColor: '#6A5ACD',
        height: 50,
    },
    happyPetCoinsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
    },
    happyPetCoinsText: {
        fontSize: 15,
        color: '#ffffff',
        fontWeight: 'bold',
        position: 'absolute',
        top: 0,
        left: 50,
    },
});
