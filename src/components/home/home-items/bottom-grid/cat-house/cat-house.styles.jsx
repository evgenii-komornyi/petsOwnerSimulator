import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    catHouseContainer: {
        position: 'absolute',
    },
    catHouseImage: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    badge: { backgroundColor: 'black' },
    badgeContainer: {
        position: 'absolute',
        bottom: 0,
        left: 60,
    },
});
