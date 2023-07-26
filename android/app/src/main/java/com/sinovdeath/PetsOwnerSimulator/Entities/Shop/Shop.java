package com.sinovdeath.PetsOwnerSimulator.Entities.Shop;

import com.sinovdeath.PetsOwnerSimulator.Helpers.Generators.Shop.ShopGenerator;

import java.io.Serializable;
import java.util.List;

public class Shop implements Serializable {
    private String name;
    private List<ShopItem> shopItems;

    public Shop() {
        this.name = "All For Your Pets Shop";
        this.shopItems = ShopGenerator.generateShop();
    }
}
