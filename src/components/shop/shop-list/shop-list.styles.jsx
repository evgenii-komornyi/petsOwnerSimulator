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
        backgroundColor: '#6A5ACD',
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
        width: '90%',
        height: 50,
        marginTop: 10,
    },
    buyButtonContainer: {
        height: 50,
        borderColor: Constants.MAIN_COLOR,
        borderWidth: 1,
    },
    buttonStyle: {
        backgroundColor: Constants.MAIN_COLOR,
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
    },
    quantityTitle: {
        borderColor: Constants.MAIN_COLOR,
        borderWidth: 1,
    },
});
