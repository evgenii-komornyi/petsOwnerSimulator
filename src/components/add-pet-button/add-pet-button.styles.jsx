import { StyleSheet } from 'react-native';
import { Constants } from '../../constants/constants';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: Constants.MAIN_COLOR,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    title: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});
