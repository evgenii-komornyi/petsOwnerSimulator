import React from 'react';
import { Button } from '@rneui/themed';

import useOwnerStore from '../../../../app/useOwnerStore';
import { useToast } from '../../../../hooks/common/useToast.hook';

export const BuyRenewButton = ({
    item,
    quantity,
    setIsPressed,
    resetQuantity,
    buttonTitle,
}) => {
    const { happyPetCoins, setHappyPetCoins, buyItem } = useOwnerStore();
    const toastCaller = useToast();

    const buy = () => {
        if (item.cost > happyPetCoins) {
            toastCaller(`You do not have enough money!`);

            return;
        }

        if (item.type === 'food') {
            buyItem({ ...item, count: quantity });
            setHappyPetCoins(happyPetCoins - item.cost * quantity);
            setIsPressed(prev => !prev);
            resetQuantity();
            toastCaller(
                `You bought ${quantity} ${item.name} item${
                    quantity > 1 ? 's' : ''
                }!`
            );
        } else {
            buyItem(item);
            setHappyPetCoins(happyPetCoins - item.cost);
            setIsPressed(prev => !prev);
            resetQuantity();
            toastCaller(`You bought ${item.name}!`);
        }
    };

    return <Button onPress={buy}>{buttonTitle}</Button>;
};
