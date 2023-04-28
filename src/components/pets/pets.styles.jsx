import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 8,
        ...(width >= 768 && {
            paddingHorizontal: '20%',
        }),
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 80,
        alignItems: 'center',
        alignContent: 'center',
        ...(width >= 768 && {
            paddingHorizontal: '20%',
        }),
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    emptyPetsText: {
        fontSize: 20,
    },
    gameOverText: {
        fontWeight: 'bold',
        fontSize: 48,
    },
    contentContainer: {
        marginTop: 2,
        paddingVertical: 10,
        marginBottom: '30%',
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
    },
    petName: {
        position: 'absolute',
        bottom: 1,
        elevation: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '90%',
        height: 30,
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
    },
});