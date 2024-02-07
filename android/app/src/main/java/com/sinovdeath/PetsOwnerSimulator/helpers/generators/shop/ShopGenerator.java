package com.sinovdeath.PetsOwnerSimulator.helpers.generators.shop;

import com.sinovdeath.PetsOwnerSimulator.entities.shop.ShopItem;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemType;

import java.util.ArrayList;
import java.util.List;

public class ShopGenerator {
    public static List<ShopItem> generateShop() {
        List<ShopItem> shop = new ArrayList<>();
        ShopItem foodItems = new ShopItem(ItemType.FOOD.getItemType(), FoodGenerator.generateFood());
        ShopItem toysItems = new ShopItem(ItemType.TOYS.getItemType(), ToysGenerator.generateToys());
        ShopItem litterBoxesItems = new ShopItem(ItemType.LITTER_BOXES.getItemType(), LitterBoxesGenerator.generateLitterBoxes());
        ShopItem scratchersItems = new ShopItem(ItemType.SCRATCHERS.getItemType(), ScratchersGenerator.generateScratchers());
        ShopItem feedersItems = new ShopItem(ItemType.FEEDERS.getItemType(), FeedersGenerator.generateFeeders());

        shop.add(foodItems);
        shop.add(feedersItems);
        shop.add(toysItems);
        shop.add(litterBoxesItems);
        shop.add(scratchersItems);

        return shop;
    }
}
