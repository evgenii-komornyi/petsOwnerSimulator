import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 10,
        borderWidth: 2,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    statContainer: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        position: 'relative',
        zIndex: 1,
    },
    iconLevel: {
        health: {
            container: { width: '10%', marginRight: 10 },
            icon: { width: 20, height: 20 },
        },
        satiety: {
            container: { width: '10%', marginRight: 20 },
            icon: { width: 30, height: 22 },
        },
        mood: {
            container: { width: '10%', marginRight: 20 },
            icon: { width: 30, height: 20 },
        },
    },
    barContainer: {
        width: '90%',
    },
    bar: { width: '90%', marginLeft: 10, height: 10, borderRadius: 10 },
    labelContainer: {
        position: 'absolute',
        top: -2,
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    label: {
        fontSize: 10,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});
