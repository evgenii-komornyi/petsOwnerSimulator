package com.sinovdeath.PetsOwnerSimulator.helpers.generators.shop;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.items.food.Food;
import com.sinovdeath.PetsOwnerSimulator.entities.items.food.FoodImage;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemType;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class FoodGenerator {
    public static List<Item> generateFood() {
        List<Item> food = new ArrayList<>();

        Food chicken_10k = new Food();
        chicken_10k.setId("chicken-10k");
        chicken_10k.setName("chicken");
        chicken_10k.setType(ItemType.FOOD.getItemType().toLowerCase());
        chicken_10k.setForAnimal("cat");
        FoodImage chicken_10kImage = new FoodImage();
        chicken_10kImage.setUnused(String.format("%s/%s%s", Constants.ASSETS_FOOD_FOLDER, chicken_10k.getName(), Constants.IMAGE_EXT));
        chicken_10k.setImage(chicken_10kImage);
        chicken_10k.setSatisfaction(20);
        chicken_10k.setPrice(new BigDecimal("5.00"));

        food.add(chicken_10k);

        return food;
    }
}
