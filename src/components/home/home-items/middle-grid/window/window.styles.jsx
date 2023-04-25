import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    windowButtonContainer: {
        position: 'relative',
        width: '100%',
        height: 250,
        top: 20,
        ...(width >= 360 &&
            width < 768 && {
                height: '83%',
                left: '5%',
            }),
        ...(width >= 768 && {
            height: '85%',
        }),
    },
    image: { width: '100%', height: '100%' },
});
