import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    holidayDecor: {
        position: 'absolute',
        width: 90,
        height: 90,
        ...(width >= 360 &&
            width < 768 && {
                width: 70,
                height: 70,
            }),
        ...(width > 768 && {
            width: 120,
            height: 120,
        }),
        zIndex: 2,
    },
    decorImage: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
    },
    animationContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
        top: 0,
        left: 0,
    },
    petFrameContainer: {
        position: 'absolute',
        zIndex: 10,
    },
    petFrame: {
        width: 170,
        height: 170,
    },
});
