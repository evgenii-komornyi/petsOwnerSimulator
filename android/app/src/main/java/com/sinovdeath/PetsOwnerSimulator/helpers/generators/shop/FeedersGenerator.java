package com.sinovdeath.PetsOwnerSimulator.helpers.generators.shop;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.items.feeder.Bowl;
import com.sinovdeath.PetsOwnerSimulator.entities.items.feeder.FeederImage;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemFor;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemType;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class FeedersGenerator {
    public static List<Item> generateFeeders() {
        List<Item> feeders = new ArrayList<>();

        Bowl wb_1 = new Bowl();
        wb_1.setId("wb-1");
        wb_1.setName("Water Bowl");
        wb_1.setType(ItemType.WATER_BOWL.getItemType());
        wb_1.setFeederType(ItemType.WATER_BOWL.getItemType());
        wb_1.setMaxSlots(20);
        wb_1.setCurrentSlots(wb_1.getMaxSlots());
        wb_1.setForAnimal(ItemFor.CAT);
        wb_1.setIntervalsToBecomeDirty(15 * Constants.INTERVALS_COUNT);
        wb_1.setDirtinessCalmDown(wb_1.getIntervalsToBecomeDirty());
        FeederImage wb_1FeederImage = new FeederImage();
        wb_1FeederImage.setShopImage(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_FEEDERS_FOLDER, wb_1.getId(), "shop", Constants.IMAGE_EXT));
        wb_1FeederImage.setWaterFull(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_FEEDERS_FOLDER, wb_1.getId(), "full", Constants.IMAGE_EXT));
        wb_1FeederImage.setEmpty(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_FEEDERS_FOLDER, wb_1.getId(), "empty", Constants.IMAGE_EXT));
        wb_1FeederImage.setWaterDirty(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_FEEDERS_FOLDER, wb_1.getId(), "dirty", Constants.IMAGE_EXT));
        wb_1FeederImage.setCurrentImage(wb_1FeederImage.getWaterFull());
        wb_1.setImage(wb_1FeederImage);
        wb_1.setPrice(new BigDecimal("20.00"));

        feeders.add(wb_1);

        return feeders;
    }
}
