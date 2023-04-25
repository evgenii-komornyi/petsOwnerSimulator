import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    topGridContainer: {
        flex: 3,
        flexDirection: 'row',
    },
    sofaContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    tableContainer: {
        flex: 0.4,
        justifyContent: 'flex-end',
    },
    smellContainer: {
        width: '70%',
        height: '60%',
        position: 'absolute',
        top: '75%',
        right: '8%',
        ...(width >= 768 && { height: '55%' }),
        zIndex: 999999,
    },
    smellImage: {
        height: '100%',
    },
});
