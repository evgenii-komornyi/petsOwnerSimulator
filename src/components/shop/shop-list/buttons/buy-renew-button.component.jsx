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
    const { happyPetCoins, buyItem } = useOwnerStore(state => state);
    const toastCaller = useToast();

    const buy = () => {
        if (item.price * quantity > happyPetCoins) {
            toastCaller(`You do not have enough money!`);

            return;
        }

        if (item.type === 'food') {
            buyItem({ ...item, count: quantity });
            setIsPressed(prev => !prev);
            resetQuantity();
            toastCaller(
                `You bought ${quantity} ${item.name} item${
                    quantity > 1 ? 's' : ''
                }!`
            );
        } else {
            buyItem(item);
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
