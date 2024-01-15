import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from '../../../constants/constants';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        marginBottom: 80,
        ...(width >= 768 && {
            paddingHorizontal: '20%',
        }),
    },
    contentContainer: {
        marginTop: 2,
        padding: 10,
        marginBottom: '30%',
    },
    categoryContainer: {
        flex: 1,
    },
    categoryNameContainer: {
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
    categoryName: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#ffffff',
    },
    itemContainerStyle: {
        width: 250,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Constants.MAIN_COLOR,
        borderRadius: 10,
    },
    forAnimalContainer: {
        position: 'absolute',
        top: -10,
        left: 60,
    },
    itemWrapper: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        elevation: 1,
    },
    itemName: {
        fontWeight: 'bold',
    },
    itemImageContainer: {
        width: 90,
        height: 90,
    },
    itemImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    itemDescription: {
        paddingHorizontal: 5,
    },
    buttonContainer: {
        flex: 1,
        width: '90%',
        marginTop: 10,
        paddingHorizontal: 5,
    },
    buyButtonContainer: {
        flex: 1,
        height: 50,
        borderColor: Constants.MAIN_COLOR,
        backgroundColor: Constants.MAIN_COLOR,
        borderRadius: 10,
        borderWidth: 1,
    },
    buttonStyle: {
        borderWidth: 2,
        borderColor: Constants.MAIN_COLOR,
        width: 40,
        height: 40,
        backgroundColor: 'none',
        borderRadius: 50,
    },
    buttonContentWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    quantityContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        paddingVertical: 5,
        paddingHorizontal: 30,
        marginVertical: 15,
    },
    quantityTitle: {
        color: Constants.MAIN_COLOR,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
    },
});
