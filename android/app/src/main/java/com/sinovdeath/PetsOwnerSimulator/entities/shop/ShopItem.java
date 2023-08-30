package com.sinovdeath.PetsOwnerSimulator.entities.shop;

import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

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
