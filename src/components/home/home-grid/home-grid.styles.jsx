import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        marginBottom: 65,
        position: 'relative',
        ...(width >= 767 && {
            alignSelf: 'center',
        }),
    },
    itemsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
        zIndex: 0,
    },
    smellContainer: {
        position: 'absolute',
        zIndex: 998,
    },
    smellImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        position: 'relative',
    },
});
