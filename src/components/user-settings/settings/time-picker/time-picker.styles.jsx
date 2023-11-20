import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    settingsContainer: {
        flex: 1,
    },
    alarmContainer: {
        flex: 1,
    },
    alarmDetailsContainer: {
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
    },
    switcherContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timeContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    notificationText: { paddingVertical: 5 },
    timeButtonContainer: {
        position: 'relative',
        marginHorizontal: 20,
    },
    timeText: {
        fontWeight: '700',
        fontSize: 20,
        color: '#bbb',
        backgroundColor: '#000',
        borderRadius: 20,
        paddingVertical: 4,
        paddingRight: 15,
        paddingLeft: 10,
    },
    iconContainer: {
        width: 20,
        height: 20,
        backgroundColor: '#000',
        borderRadius: 50,
        position: 'absolute',
        top: 0,
        right: -5,
    },
});
