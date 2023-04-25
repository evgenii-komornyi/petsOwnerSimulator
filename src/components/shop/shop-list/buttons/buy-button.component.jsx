import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';

import { Icon } from '../../../icon/icon.component';
import { CustomText } from '../../../custom-text/custom-text.component';

import { useBuyButton } from '../../../../hooks/logic/useBuyButton.hook';

import { Constants } from '../../../../constants/constants';

import { styles } from '../shop-list.styles';
import { QuantityButtons } from './quantity-buttons.component';

export const BuyButton = ({ item, category }) => {
    const [
        isPressed,
        setIsPressed,
        quantity,
        decreaseQuantity,
        increaseQuantity,
        resetQuantity,
        checkLitterBoxCategory,
        checkCatHouseCategory,
        returnButtonTitle,
    ] = useBuyButton();

    return (
        <View style={styles.buttonContainer}>
            <Button
                type="outline"
                onLongPress={() => setIsPressed(prev => !prev)}
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
                            <CustomText text={`${item.cost} HPC`} />
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
                            checkedCategory={
                                checkLitterBoxCategory(category) ||
                                checkCatHouseCategory(category)
                            }
                            buttonTitle={returnButtonTitle(category, item)}
                        />
                    )}
                </View>
            </Button>
        </View>
    );
};
