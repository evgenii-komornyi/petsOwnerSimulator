import React from 'react';
import { Button } from '@rneui/themed';

import { useBuyRenewButton } from '../../../../hooks/logic/shop/useBuyRenewButton.hook';

import { styles } from '../shop-list.styles';

export const BuyRenewButton = ({
    item,
    quantity,
    setIsPressed,
    resetQuantity,
    buttonTitle,
}) => {
    const { buy } = useBuyRenewButton(
        item,
        quantity,
        setIsPressed,
        resetQuantity
    );

    return (
        <Button onPress={buy} buttonStyle={styles.buttonStyle}>
            {buttonTitle}
        </Button>
    );
};
