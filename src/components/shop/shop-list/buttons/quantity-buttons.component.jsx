import React from 'react';
import { View } from 'react-native';

import { CustomButton } from './custom-button.component';

import { styles } from '../shop-list.styles';
import { CustomText } from '../../../custom-text/custom-text.component';

export const QuantityButtons = ({
    quantity,
    decreaseQuantity,
    increaseQuantity,
    checkedItem,
    isNotEnoughMoney,
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
                    <CustomText
                        text={`${quantity}`}
                        style={styles.quantityTitle}
                    />
                    <CustomButton
                        content="+"
                        onPress={increaseQuantity}
                        disabled={isNotEnoughMoney}
                    />
                </>
            )}
        </View>
    );
};
