import { useState } from 'react';
import useOwnerStore from '../../../app/useOwnerStore';
import { isObjectExists } from '../../../helpers/objects.helper';

export const useBuyButton = () => {
    const [isPressed, setIsPressed] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const { litterBox, catHouse } = useOwnerStore(
        state => state.home.livingRoom
    );

    const increaseQuantity = () => {
        setQuantity(prev => (prev + 1 > 9 ? 9 : prev + 1));
    };

    const decreaseQuantity = () => {
        setQuantity(prev => (prev - 1 < 1 ? 1 : prev - 1));
    };

    const resetQuantity = () => {
        setQuantity(1);
    };

    const checkOwnerLitterBoxIdAndShopItemId = item => litterBox.id === item.id;

    const checkOwnerCatHouseIdAndShopItemId = item => catHouse.id === item.id;

    const checkIsItemCountable = itemToCheck =>
        itemToCheck.hasOwnProperty('count');

    const returnButtonTitle = item => {
        if (!checkIsItemCountable(item)) {
            if (
                isObjectExists(litterBox) &&
                checkOwnerLitterBoxIdAndShopItemId(item)
            ) {
                return 'RENEW';
            }

            if (
                isObjectExists(catHouse) &&
                checkOwnerCatHouseIdAndShopItemId(item)
            ) {
                return 'RENEW';
            }
        }

        return 'BUY';
    };

    return {
        isPressed,
        setIsPressed,
        quantity,
        decreaseQuantity,
        increaseQuantity,
        resetQuantity,
        checkIsItemCountable,
        returnButtonTitle,
    };
};
