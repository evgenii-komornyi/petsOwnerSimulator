import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    buttonContainer: { backgroundColor: 'black' },
    selectedButton: {
        backgroundColor: 'black',
        borderBottomWidth: 5,
        borderBottomColor: '#D2691E',
    },
    componentContainer: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 5,
    },
});
