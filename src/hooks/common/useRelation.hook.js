import { Dimensions } from 'react-native';
import { Constants } from '../../constants/constants';
import useRelationStore from '../../app/useRelationStore';

const { width, height } = Dimensions.get('screen');

export const useRelation = () => {
    const { containerHeight, images, isCalculated, setContainerHeight } =
        useRelationStore();

    const roomRelation = Constants.ROOM_HEIGHT / Constants.ROOM_WIDTH;
    const screenRelation = height / width;

    const checkRelation = () => screenRelation > roomRelation;

    const scalingCoefficient = checkRelation()
        ? Constants.ROOM_WIDTH / width
        : Constants.ROOM_HEIGHT / containerHeight;

    const padding = checkRelation()
        ? (containerHeight - Constants.ROOM_HEIGHT / scalingCoefficient) / 2
        : (width - Constants.ROOM_WIDTH / scalingCoefficient) / 2;

    const calculateContainerSizeAndOffsets = image => {
        const currentImage = images[image];
        const currentImageSize = currentImage?.getSize();
        const currentImageOffsets = currentImage?.getOffset();
        const currentImageWidth = currentImageSize.getWidth();
        const currentImageHeight = currentImageSize.getHeight();
        currentImageTopOffset = currentImageOffsets.getTop();
        currentImageLeftOffset = currentImageOffsets.getLeft();

        const calculatedWidth = currentImageWidth / scalingCoefficient;
        const calculatedHeight = currentImageHeight / scalingCoefficient;
        const calculatedTopOffset = currentImageTopOffset / scalingCoefficient;
        const calculatedLeftOffset =
            currentImageLeftOffset / scalingCoefficient;

        return {
            width: calculatedWidth,
            height: calculatedHeight,
            top: calculatedTopOffset,
            left: calculatedLeftOffset,
        };
    };

    return {
        checkRelation,
        padding,
        setContainerHeight,
        calculateContainerSizeAndOffsets,
    };
};
