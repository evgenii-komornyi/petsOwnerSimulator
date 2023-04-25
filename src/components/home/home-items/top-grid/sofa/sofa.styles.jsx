import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    sofaContainer: {
        width: '100%',
        height: '85%',
        position: 'relative',
        ...(width >= 360 &&
            width < 768 && {
                width: '100%',
                height: '70%',
                top: '13%',
                left: '6%',
            }),
        ...(width >= 768 && {
            width: '100%',
            height: '72%',
            top: '13%',
            left: '6.5%',
        }),
        zIndex: 1,
    },
    sofaImage: {
        width: '100%',
        height: '100%',
    },
});
