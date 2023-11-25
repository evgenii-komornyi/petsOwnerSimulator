import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    label: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    container: {
        width: width,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
