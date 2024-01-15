import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';

import { Icon } from '../../../icon/icon.component';
import { CustomText } from '../../../custom-text/custom-text.component';
import { QuantityButtons } from './quantity-buttons.component';

import { useBuyButton } from '../../../../hooks/logic/shop/useBuyButton.hook';
import { useBuyRenewButton } from '../../../../hooks/logic/shop/useBuyRenewButton.hook';

import { Constants } from '../../../../constants/constants';

import { styles } from '../shop-list.styles';

export const BuyButton = ({ item }) => {
    const {
        quantity,
        decreaseQuantity,
        increaseQuantity,
        resetQuantity,
        checkIsItemCountable,
        returnButtonTitle,
    } = useBuyButton();
    const { buy, notEnoughMoney } = useBuyRenewButton(
        item,
        quantity,
        resetQuantity
    );
    const isItemCountable = checkIsItemCountable(item);

    return (
        <View style={styles.buttonContainer}>
            {isItemCountable && (
                <QuantityButtons
                    quantity={quantity}
                    decreaseQuantity={decreaseQuantity}
                    increaseQuantity={increaseQuantity}
                    checkedItem={isItemCountable}
                    isNotEnoughMoney={notEnoughMoney}
                />
            )}
            <Button
                type="outline"
                onPress={buy}
                disabled={notEnoughMoney}
                disabledStyle={{ backgroundColor: 'silver' }}
                buttonStyle={[styles.buyButtonContainer]}
            >
                <View style={styles.buttonContentWrapper}>
                    <CustomText
                        text={returnButtonTitle(item)}
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            padding: 3,
                        }}
                    />
                    <Icon
                        type={Constants.MATERIALICONS_ICON}
                        icon="add-shopping-cart"
                        color="white"
                        size={20}
                    />
                    <CustomText
                        text={`${
                            isItemCountable ? item.price * quantity : item.price
                        } HPC`}
                        style={{
                            backgroundColor: `${
                                notEnoughMoney ? 'darkred' : 'transparent'
                            }`,
                            color: 'white',
                            fontWeight: 'bold',
                            padding: 3,
                        }}
                    />
                </View>
            </Button>
        </View>
    );
};
