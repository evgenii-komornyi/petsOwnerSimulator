import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    toyImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    button: { position: 'relative', top: '50%', left: '40%' },
    badge: { backgroundColor: 'black' },
    badgeContainer: {
        position: 'absolute',
        top: 0,
        left: 10,
    },
});
