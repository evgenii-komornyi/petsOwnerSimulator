package com.sinovdeath.PetsOwnerSimulator.helpers.generators.shop;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBoxImage;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemType;
import com.sinovdeath.PetsOwnerSimulator.enums.UriType;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class LitterBoxesGenerator {
    public static List<Item> generateLitterBoxes() {
        List<Item> litterBoxes = new ArrayList<>();

        LitterBox litterBox_lb1000 = new LitterBox();
        litterBox_lb1000.setId("lb-1000");
        litterBox_lb1000.setName("LB-1000");
        litterBox_lb1000.setMaxSlots(15);
        litterBox_lb1000.setSlots(litterBox_lb1000.getMaxSlots());
        litterBox_lb1000.setType(ItemType.LITTER_BOX.getItemType());
        LitterBoxImage litterBox_lb1000Image = new LitterBoxImage();
        String lb_1000Id = litterBox_lb1000.getId();
        litterBox_lb1000Image.setShopImage(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_LITTER_BOXES_FOLDER, lb_1000Id, UriType.SHOP.getUriValue(), Constants.IMAGE_EXT));
        litterBox_lb1000Image.setUsed(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_LITTER_BOXES_FOLDER, lb_1000Id, UriType.USED.getUriValue(), Constants.IMAGE_EXT));
        litterBox_lb1000Image.setFull(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_LITTER_BOXES_FOLDER, lb_1000Id, UriType.FULL.getUriValue(), Constants.IMAGE_EXT));
        litterBox_lb1000Image.setEmpty(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_LITTER_BOXES_FOLDER, lb_1000Id, UriType.EMPTY.getUriValue(), Constants.IMAGE_EXT));
        litterBox_lb1000Image.setCurrentImage(litterBox_lb1000Image.getEmpty());
        litterBox_lb1000.setImage(litterBox_lb1000Image);
        litterBox_lb1000.setPrice(new BigDecimal("20.00"));

        litterBoxes.add(litterBox_lb1000);

        return litterBoxes;
    }
}
