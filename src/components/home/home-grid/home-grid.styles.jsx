import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from '../../../constants/constants';

const { width, height } = Dimensions.get('screen');

const roomRelation = Constants.ROOM_HEIGHT / Constants.ROOM_WIDTH;
const screenRelation = height / width;

const containerHeight =
    height - Constants.MENU_HEIGHT - Constants.HEADER_HEIGHT;

const checkRelation = () => screenRelation > roomRelation;

const scalingCoefficient = checkRelation()
    ? Constants.ROOM_WIDTH / width
    : Constants.ROOM_HEIGHT / containerHeight;

const padding = checkRelation()
    ? (containerHeight - Constants.ROOM_HEIGHT / scalingCoefficient) / 2
    : (width - Constants.ROOM_WIDTH / scalingCoefficient) / 2;

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        marginBottom: 65,
        ...(width >= 767 && {
            alignSelf: 'center',
        }),
        ...(checkRelation()
            ? { paddingVertical: padding }
            : { paddingHorizontal: padding }),
    },
    itemsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '100%',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
});
