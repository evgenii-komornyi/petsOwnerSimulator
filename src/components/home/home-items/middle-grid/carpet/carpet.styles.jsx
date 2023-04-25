import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    carpetContainer: {},
    carpetImage: {
        width: '100%',
        height: '80%',
        flex: 1,
        position: 'relative',
        top: 30,
        zIndex: 0,
        ...(width >= 360 &&
            width < 768 && {
                height: '65%',
                top: '19%',
            }),
        ...(width >= 768 && {
            height: '60%',
            top: '17%',
        }),
    },
});
