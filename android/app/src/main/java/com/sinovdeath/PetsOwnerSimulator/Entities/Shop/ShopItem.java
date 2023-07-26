package com.sinovdeath.PetsOwnerSimulator.Entities.Shop;

import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;

import java.io.Serializable;
import java.util.List;

public class ShopItem implements Serializable {
    private String title;
    private List<Item> items;

    public ShopItem(String title, List<Item> items) {
        this.title = title;
        this.items = items;
    }
}
