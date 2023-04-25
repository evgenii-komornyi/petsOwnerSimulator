import React from 'react';
import { View } from 'react-native';

import { Chip } from '@rneui/themed';

import { useBuyButton } from '../../../../hooks/logic/useBuyButton.hook';
import { CustomButton } from './custom-button.component';
import { styles } from '../shop-list.styles';
import { BuyRenewButton } from './buy-renew-button.component';

export const QuantityButtons = ({
    item,
    setIsPressed,
    quantity,
    decreaseQuantity,
    increaseQuantity,
    resetQuantity,
    checkedCategory,
    buttonTitle,
}) => {
    return (
        <View
            style={[
                styles.quantityContainer,
                {
                    justifyContent: !checkedCategory
                        ? 'space-between'
                        : 'center',
                },
            ]}
        >
            {!checkedCategory && (
                <>
                    <CustomButton content="-" onPress={decreaseQuantity} />
                    <Chip title={`${quantity}`} type="outline" />
                    <CustomButton content="+" onPress={increaseQuantity} />
                </>
            )}
            <BuyRenewButton
                item={item}
                quantity={quantity}
                resetQuantity={resetQuantity}
                setIsPressed={setIsPressed}
                buttonTitle={buttonTitle}
            />
        </View>
    );
};
