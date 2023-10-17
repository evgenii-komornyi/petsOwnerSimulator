import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    catHouseContainer: {
        position: 'relative',
        ...(width >= 360 &&
            width < 768 && {
                width: '100%',
                height: '54%',
                left: '11%',
                bottom: '36%',
            }),
        ...(width >= 768 && {
            width: '100%',
            height: '60%',
            left: '15%',
            bottom: '33%',
        }),
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
        left: 40,
    },
});
