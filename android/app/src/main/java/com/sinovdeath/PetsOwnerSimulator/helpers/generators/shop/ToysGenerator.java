package com.sinovdeath.PetsOwnerSimulator.helpers.generators.shop;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.ToyImage;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.InteractToy;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.NonInteractToy;
import com.sinovdeath.PetsOwnerSimulator.entities.stats.Stats;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemFor;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemType;
import com.sinovdeath.PetsOwnerSimulator.enums.ToyType;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class ToysGenerator {
    public static List<Item> generateToys() {
        List<Item> toys = new ArrayList<>();

        NonInteractToy mouse_1 = new NonInteractToy();
        mouse_1.setId("mouse_1");
        mouse_1.setName("mouse");
        mouse_1.setType(ItemType.TOYS.getItemType().toLowerCase());
        mouse_1.setToyType(ToyType.NON_INTERACT);
        mouse_1.setForAnimal(ItemFor.CAT);
        Stats mouse_1Stats = new Stats();
        mouse_1Stats.setHappiness(100);
        mouse_1.setStats(mouse_1Stats);
        ToyImage mouse_1Image = new ToyImage();
        mouse_1Image.setUnused(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_TOYS_FOLDER, mouse_1.getName(), Constants.IMAGE_EXT));
        mouse_1Image.setShopImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_TOYS_FOLDER, mouse_1.getName(), Constants.IMAGE_EXT));
        mouse_1Image.setCurrentImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_TOYS_FOLDER, mouse_1.getName(), Constants.IMAGE_EXT));
        mouse_1.setImage(mouse_1Image);
        mouse_1.setMaxDurability(100);
        mouse_1.setDurability(mouse_1.getMaxDurability());
        mouse_1.setPrice(new BigDecimal("5.00"));
        mouse_1.setCount(0);

        InteractToy wand_1 = new InteractToy();
        wand_1.setId("wand_1");
        wand_1.setName("wand");
        wand_1.setType(ItemType.TOYS.getItemType().toLowerCase());
        wand_1.setToyType(ToyType.INTERACT);
        wand_1.setForAnimal(ItemFor.CAT);
        ToyImage wand_1Image = new ToyImage();
        wand_1Image.setUnused(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_TOYS_FOLDER, wand_1.getName(), Constants.IMAGE_EXT));
        wand_1Image.setShopImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_TOYS_FOLDER, wand_1.getName(), Constants.IMAGE_EXT));
        wand_1Image.setCurrentImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_TOYS_FOLDER, wand_1.getName(), Constants.IMAGE_EXT));
        wand_1.setImage(wand_1Image);
        wand_1.setMaxDurability(150);
        wand_1.setDurability(wand_1.getMaxDurability());
        wand_1.setPrice(new BigDecimal("10.00"));

        toys.add(mouse_1);
//        toys.add(wand_1);

        return toys;
    }
}
