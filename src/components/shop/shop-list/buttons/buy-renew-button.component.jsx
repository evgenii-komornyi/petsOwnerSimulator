import React from 'react';
import { Button } from '@rneui/themed';

import useOwnerStore from '../../../../app/useOwnerStore';
import { useToast } from '../../../../hooks/common/useToast.hook';
import { styles } from '../shop-list.styles';

export const BuyRenewButton = ({
    item,
    quantity,
    setIsPressed,
    resetQuantity,
    buttonTitle,
}) => {
    const { happyPetCoins, setHappyPetCoins, buyItem } = useOwnerStore(
        state => state
    );
    const toastCaller = useToast();

    const buy = () => {
        if (item.price > happyPetCoins) {
            toastCaller(`You do not have enough money!`);

            return;
        }

        if (item.type === 'food') {
            buyItem({ ...item, count: quantity });
            setHappyPetCoins(happyPetCoins - item.price * quantity);
            setIsPressed(prev => !prev);
            resetQuantity();
            toastCaller(
                `You bought ${quantity} ${item.name} item${
                    quantity > 1 ? 's' : ''
                }!`
            );
        } else {
            buyItem(item);
            setHappyPetCoins(happyPetCoins - item.price);
            setIsPressed(prev => !prev);
            resetQuantity();
            toastCaller(`You bought ${item.name}!`);
        }
    };

    return (
        <Button onPress={buy} buttonStyle={styles.buttonStyle}>
            {buttonTitle}
        </Button>
    );
};
