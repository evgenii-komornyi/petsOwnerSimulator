import { Dimensions, StyleSheet } from 'react-native';

const { width, height, scale, fontScale } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ownerInfoContainer: {
        flex: 1,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    developerSectionContainer: {
        padding: 10,
    },
    dangerZoneContainer: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    dangerZoneButtonsContainer: {
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
        borderColor: '#ff0000',
        alignItems: 'center',
    },
    clearDataButtonText: {
        textTransform: 'uppercase',
        letterSpacing: 5,
    },
});
