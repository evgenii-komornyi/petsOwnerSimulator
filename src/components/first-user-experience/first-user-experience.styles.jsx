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
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    helpTitleContainer: {
        alignSelf: 'center',
    },
    helpTitleText: {
        textAlign: 'center',
    },
    helpImageContainer: {
        justifyContent: 'center',
        width: width * 0.8,
        height: 150,
        alignSelf: 'center',
        paddingVertical: 10,
    },
    helpImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    helpDescriptionContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
    },
    helpDescriptionText: {
        fontSize: 16,
        textAlign: 'center',
    },
});
