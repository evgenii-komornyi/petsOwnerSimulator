import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    litterContainer: {
        position: 'relative',
        ...(width >= 360 &&
            width < 768 && {
                width: '100%',
                height: '60%',
                right: '19%',
                bottom: '42%',
            }),
        ...(width >= 768 && {
            width: '100%',
            height: '60%',
            right: '20%',
            bottom: '42%',
        }),
    },
    litterImage: {
        width: '100%',
        height: '100%',
    },
});
