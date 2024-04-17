import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    controllerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    arrowsContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    controlsContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10,
        marginRight: 20,
    },
    lettersContainer: {
        flex: 4,
        flexDirection: 'column',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        transform: [{ rotate: '-10deg' }],
        width: '60%',
    },
    button: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        alignItems: 'center',
    },
    topButtons: {
        width: 40,
        height: 40,
        paddingVertical: 5,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        transform: [{ rotate: '30deg' }],
    },
    bottomButtons: {
        width: 50,
        height: 50,
        paddingVertical: 11,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        transform: [{ rotate: '30deg' }],
    },
    startButton: {
        width: 80,
        height: 25,
        margin: 5,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'rgba(0, 0, 150, .8)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
