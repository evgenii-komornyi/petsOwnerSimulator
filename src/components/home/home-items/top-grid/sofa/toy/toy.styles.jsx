import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    toyImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    button: {
        position: 'relative',
    },
    badge: { backgroundColor: 'black' },
    badgeContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
    },
});
