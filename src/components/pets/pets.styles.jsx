import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        marginBottom: 80,
        ...(width >= 768 && {
            paddingHorizontal: '20%',
        }),
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    petContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
    },
    actionsContainer: {
        flex: 0.2,
        paddingHorizontal: 5,
        marginBottom: 5,
    },
    pressedStats: {
        backgroundColor: 'rgba(106, 90, 205, 0.8)',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    petCardContainer: {
        flex: 1,
        marginRight: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    petImage: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
        backgroundColor: 'rgba(106, 90, 205, .8)',
    },
    petName: {
        position: 'absolute',
        bottom: 1,
        elevation: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '90%',
        height: 30,
        backgroundColor: 'rgba(218, 165, 32, 0.8)',
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
    },
});
