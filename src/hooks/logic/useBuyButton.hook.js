import { useState } from 'react';
import useOwnerStore from '../../app/useOwnerStore';
import { isObjectExists } from '../../helpers/objects.helper';

export const useBuyButton = () => {
    const [isPressed, setIsPressed] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const { litterBox, catHouse } = useOwnerStore(state => state.inventory);

    const increaseQuantity = () => {
        setQuantity(prev => (prev + 1 > 9 ? 9 : prev + 1));
    };

    const decreaseQuantity = () => {
        setQuantity(prev => (prev - 1 < 1 ? 1 : prev - 1));
    };

    const resetQuantity = () => {
        setQuantity(1);
    };

    const checkLitterBoxCategory = category => category === 'Litter Boxes';

    const checkOwnerLitterBoxIdAndShopItemId = item => litterBox.id === item.id;

    const checkCatHouseCategory = category => category === 'Houses';

    const checkOwnerCatHouseIdAndShopItemId = item => catHouse.id === item.id;

    const returnButtonTitle = (category, item) => {
        if (
            checkLitterBoxCategory(category) &&
            checkOwnerLitterBoxIdAndShopItemId(item)
        ) {
            if (isObjectExists(litterBox)) {
                return 'RENEW';
            }
        }

        if (
            checkCatHouseCategory(category) &&
            checkOwnerCatHouseIdAndShopItemId(item)
        ) {
            if (isObjectExists(catHouse)) {
                return 'RENEW';
            }
        }

        return 'BUY';
    };

    return [
        isPressed,
        setIsPressed,
        quantity,
        decreaseQuantity,
        increaseQuantity,
        resetQuantity,
        checkLitterBoxCategory,
        checkCatHouseCategory,
        returnButtonTitle,
    ];
};
