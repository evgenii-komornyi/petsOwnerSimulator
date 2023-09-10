import React from 'react';
import { View } from 'react-native';

import { Chip } from '@rneui/themed';

import { CustomButton } from './custom-button.component';
import { BuyRenewButton } from './buy-renew-button.component';

import { styles } from '../shop-list.styles';

export const QuantityButtons = ({
    item,
    setIsPressed,
    quantity,
    decreaseQuantity,
    increaseQuantity,
    resetQuantity,
    checkedItem,
    buttonTitle,
}) => {
    return (
        <View
            style={[
                styles.quantityContainer,
                {
                    justifyContent: checkedItem ? 'space-between' : 'center',
                },
            ]}
        >
            {checkedItem && (
                <>
                    <CustomButton content="-" onPress={decreaseQuantity} />
                    <Chip
                        title={`${quantity}`}
                        type="outline"
                        buttonStyle={styles.quantityTitle}
                    />
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
