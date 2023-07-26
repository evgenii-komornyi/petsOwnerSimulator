package com.sinovdeath.PetsOwnerSimulator.Helpers.Generators.Shop;

import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;
import com.sinovdeath.PetsOwnerSimulator.Entities.Shop.ShopItem;
import com.sinovdeath.PetsOwnerSimulator.Enums.ItemType;

import java.util.ArrayList;
import java.util.List;

public class ShopGenerator {
    public static List<ShopItem> generateShop() {
        List<ShopItem> shop = new ArrayList<>();

        List<Item> food = new ArrayList<>();
        List<Item> toys = new ArrayList<>();
        List<Item> litterBoxes = new ArrayList<>();
        List<Item> houses = new ArrayList<>();

        ShopItem foodItems = new ShopItem(ItemType.FOOD.getItemType(), FoodGenerator.generateFood());
        ShopItem toysItems = new ShopItem(ItemType.TOYS.getItemType(), ToysGenerator.generateToys());
        ShopItem litterBoxesItems = new ShopItem(ItemType.LITTER_BOXES.getItemType(), LitterBoxesGenerator.generateLitterBoxes());
        ShopItem housesItems = new ShopItem(ItemType.HOUSES.getItemType(), HousesGenerator.generateHouses());

        shop.add(foodItems);
        shop.add(toysItems);
        shop.add(litterBoxesItems);
        shop.add(housesItems);

        return shop;
    }
}
