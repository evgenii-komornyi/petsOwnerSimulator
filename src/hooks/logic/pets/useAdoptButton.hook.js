import { Constants } from '../../../constants/constants';

export const useAdoptButton = pets => {
    const showTitle = () => {
        const availablePets = Constants.MAX_AVAILABLE_PETS - pets.length;

        if (pets.length === 0) {
            return 'Adopt a pet';
        } else {
            if (availablePets !== 0) {
                return `You can adopt ${availablePets} more pet${
                    availablePets > 1 ? 's' : ''
                }`;
            } else {
                return `You cannot adopt any pets`;
            }
        }
    };

    return { showTitle };
};
