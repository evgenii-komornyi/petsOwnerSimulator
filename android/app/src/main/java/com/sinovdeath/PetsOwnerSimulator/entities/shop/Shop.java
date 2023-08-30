package com.sinovdeath.PetsOwnerSimulator.entities.shop;

import com.sinovdeath.PetsOwnerSimulator.helpers.generators.shop.ShopGenerator;

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
