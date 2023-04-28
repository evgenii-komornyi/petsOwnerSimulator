import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    farewellContainer: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        top: -2,
        right: -3,
        backgroundColor: 'rgba(0, 0, 0, .9)',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        width: '110%',
        height: '114%',
        paddingHorizontal: 5,
        alignItems: 'center',
        zIndex: 2,
    },
    farewellText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 25,
    },
    buttonContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 5,
    },
    buttonTitle: {
        fontSize: 15,
        color: '#ffffff',
    },
});
