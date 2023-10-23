import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    holidayDecor: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'flex-end',
        position: 'absolute',
        height: 90,
        width: 90,
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
        height: '100%',
        width: '80%',
        resizeMode: 'contain',
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
