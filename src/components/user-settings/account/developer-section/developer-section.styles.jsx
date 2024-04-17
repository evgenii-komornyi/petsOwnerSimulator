import { StyleSheet } from 'react-native';
import { Constants } from '../../../../constants/constants';

export const styles = StyleSheet.create({
    debugSectionContainer: { flex: 1, padding: 10 },
    accordionSectionTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    accordionSectionTitle: { fontWeight: 'bold', fontSize: 20 },
    petContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    petName: {
        fontWeight: 'bold',
        fontSize: 20,
        borderColor: Constants.MAIN_COLOR,
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    controlContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    jsonButton: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 32,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
    },
    homeContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    speedButtonsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
    },
    speedButton: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 50,
        padding: 5,
    },
    disabledSpeedButton: {
        borderColor: '#999',
        color: '#999',
    },
});
