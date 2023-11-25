import { Dimensions, StyleSheet } from 'react-native';

const { width, height, scale, fontScale } = Dimensions.get('window');

export const styles = StyleSheet.create({
    settingsContainer: {
        flex: 1,
    },
    inputsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 20,
    },
    fieldContainer: {
        position: 'relative',
        marginTop: 10,
    },
    fieldTitle: {
        textTransform: 'uppercase',
        position: 'absolute',
        backgroundColor: '#000',
        color: '#bbb',
        fontWeight: '700',
        paddingVertical: 2,
        paddingHorizontal: 20,
        top: -20,
        left: 7,
        fontSize: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        letterSpacing: 12,
    },
    maxAvailableLength: {
        position: 'absolute',
        right: 0,
        paddingVertical: 2,
        paddingHorizontal: 20,
        color: '#222',
        fontSize: 11,
        paddingVertical: 2,
        paddingHorizontal: 20,
    },
    controlButtonsContainer: {
        flex: 1,
        flexDirection: width >= 320 && width <= 480 ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 50,
        marginBottom: 20,
    },
    buttonContainer: {
        flex: 1,
        width: width >= 320 && width <= 480 ? '100%' : 150,
        paddingVertical: 10,
        paddingHorizontal: width >= 320 && width <= 480 ? 10 : 20,
        borderRadius: 20,
        marginBottom: width >= 320 && width <= 480 ? 20 : 0,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#bbb',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 5,
    },
    discardButtonText: {
        textTransform: 'uppercase',
        letterSpacing: 5,
    },
});
