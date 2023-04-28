import { StyleSheet } from 'react-native';
import { Constants } from '../../../constants/constants';

export const styles = StyleSheet.create({
    cardFront: {
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
    },
    cardBack: {
        flex: 1,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
    },
    imageContainer: {
        backgroundColor: Constants.MAIN_COLOR,
        width: 200,
        height: 200,
        overflow: 'hidden',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        backgroundColor: 'rgba(106, 90, 205, 1)',
        resizeMode: 'contain',
    },
    nameContainer: {
        justifyContent: 'center',
    },
    name: {
        elevation: 6,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'relative',
        bottom: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: 'rgba(106, 90, 205, 1)',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bio: {
        fontSize: 15,
        paddingHorizontal: 10,
    },
    scrollIconContainer: {
        position: 'absolute',
        right: 15,
        bottom: '50%',
    },
});
