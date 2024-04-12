import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from '../../constants/constants';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        position: 'absolute',
        top: -40,
        zIndex: 9999,
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 5,
        borderColor: Constants.MAIN_COLOR,
        justifyContent: 'center',
        backgroundColor: 'white',
        position: 'relative',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        width: width * 0.8,
        height: width * 0.2,
        alignSelf: 'center',
    },
    title: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    helpDescriptionContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: -50,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    helpDescriptionText: {
        fontSize: 16,
        textAlign: 'center',
    },
    animationContainer: {
        padding: 5,
        alignSelf: 'center',
    },
    animation: {
        width: width * 0.3,
        height: width * 0.3,
    },
});
