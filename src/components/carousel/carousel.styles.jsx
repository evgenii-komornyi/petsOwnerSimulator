import { StyleSheet } from 'react-native';
import { Constants } from '../../constants/constants';

export const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderWidth: 1,
        borderColor: Constants.MAIN_COLOR,
        backgroundColor: 'transparent',
    },
    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: Constants.MAIN_COLOR,
    },
    slide: {
        paddingBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
    },
    typeContainer: {
        flex: 1,
        width: '50%',
        paddingHorizontal: 5,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.MAIN_COLOR,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    type: {
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#ffffff',
    },
    card: {
        backgroundColor: '#ffffff',
        borderColor: Constants.MAIN_COLOR,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden',
        height: 300,
    },
    flipIconContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
});
