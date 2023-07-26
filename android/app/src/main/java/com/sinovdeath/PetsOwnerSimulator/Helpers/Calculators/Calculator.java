package com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators;

import com.sinovdeath.PetsOwnerSimulator.Entities.Items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;

import java.math.BigDecimal;

public class Calculator {
    public static BigDecimal calculateHPC(Owner owner, Item item) {
        BigDecimal itemPrice = new BigDecimal(item.getPrice().toString());

        if (item instanceof ICountable) {
            BigDecimal itemCount = BigDecimal.valueOf(((ICountable) item).getCount());

            return owner.getHappyPetCoins().subtract(itemPrice.multiply(itemCount));
        } else {
            return owner.getHappyPetCoins().subtract(itemPrice);
        }
    }
}
