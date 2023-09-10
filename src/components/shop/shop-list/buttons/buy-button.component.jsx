import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';

import { Icon } from '../../../icon/icon.component';
import { CustomText } from '../../../custom-text/custom-text.component';
import { QuantityButtons } from './quantity-buttons.component';

import { useBuyButton } from '../../../../hooks/logic/shop/useBuyButton.hook';

import { Constants } from '../../../../constants/constants';

import { styles } from '../shop-list.styles';

export const BuyButton = ({ item, category }) => {
    const [
        isPressed,
        setIsPressed,
        quantity,
        decreaseQuantity,
        increaseQuantity,
        resetQuantity,
        checkIsItemCountable,
        returnButtonTitle,
    ] = useBuyButton();

    return (
        <View style={styles.buttonContainer}>
            <Button
                type="outline"
                onPress={() => setIsPressed(prev => !prev)}
                buttonStyle={styles.buyButtonContainer}
            >
                <View style={styles.buttonContentWrapper}>
                    {!isPressed ? (
                        <>
                            <Icon
                                type={Constants.MATERIALICONS_ICON}
                                icon="add-shopping-cart"
                                color="black"
                                size={20}
                            />
                            <CustomText text={`${item.price} HPC`} />
                        </>
                    ) : (
                        <QuantityButtons
                            category={category}
                            item={item}
                            setIsPressed={setIsPressed}
                            quantity={quantity}
                            decreaseQuantity={decreaseQuantity}
                            increaseQuantity={increaseQuantity}
                            resetQuantity={resetQuantity}
                            checkedItem={checkIsItemCountable(item)}
                            buttonTitle={returnButtonTitle(item)}
                        />
                    )}
                </View>
            </Button>
        </View>
    );
};
