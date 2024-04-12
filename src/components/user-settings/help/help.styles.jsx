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
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginBottom: 2,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Constants.MAIN_COLOR,
    },
    helpButton: {
        padding: 5,
    },
    textHelp: {
        letterSpacing: 5,
    },
    unpressedStyle: { backgroundColor: 'transparent' },
    pressedStyle: {
        backgroundColor: '#bbb',
    },
});
