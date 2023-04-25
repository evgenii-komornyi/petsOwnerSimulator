import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    tableContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 1,
        ...(width >= 360 &&
            width < 768 && {
                width: '70%',
                height: '70%',
                top: '10%',
                right: '23%',
            }),
        ...(width >= 768 && {
            width: '70%',
            height: '70%',
            top: '10%',
            right: '30%',
        }),
    },
    tableImage: {
        width: '100%',
        height: '100%',
    },
});
