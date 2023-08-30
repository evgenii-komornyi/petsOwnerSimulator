package com.sinovdeath.PetsOwnerSimulator.helpers.generators.shop;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBoxImage;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemType;
import com.sinovdeath.PetsOwnerSimulator.enums.UriType;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class LitterBoxesGenerator {
    public static List<Item> generateLitterBoxes() {
        List<Item> litterBoxes = new ArrayList<>();

        LitterBox litterBox_lb1000 = new LitterBox();
        litterBox_lb1000.setId("lb-1000");
        litterBox_lb1000.setName("LB-1000");
        litterBox_lb1000.setSlots(4);
        litterBox_lb1000.setMaxSlots(4);
        litterBox_lb1000.setType(ItemType.LITTER_BOX.getItemType());
        LitterBoxImage litterBox_lb1000Image = new LitterBoxImage();
        String lb_1000Id = litterBox_lb1000.getId();
        litterBox_lb1000Image.setUnused(String.format("%s/%s/%s%s", Constants.ASSETS_LITTER_BOXES_FOLDER, lb_1000Id, UriType.UNUSED.getUriValue(), Constants.IMAGE_EXT));
        litterBox_lb1000Image.setUsed(String.format("%s/%s/%s%s", Constants.ASSETS_LITTER_BOXES_FOLDER, lb_1000Id, UriType.USED.getUriValue(), Constants.IMAGE_EXT));
        litterBox_lb1000Image.setFull(String.format("%s/%s/%s%s", Constants.ASSETS_LITTER_BOXES_FOLDER, lb_1000Id, UriType.FULL.getUriValue(), Constants.IMAGE_EXT));
        litterBox_lb1000Image.setEmpty(String.format("%s/%s/%s%s", Constants.ASSETS_LITTER_BOXES_FOLDER, lb_1000Id, UriType.EMPTY.getUriValue(), Constants.IMAGE_EXT));
        litterBox_lb1000.setImage(litterBox_lb1000Image);
        litterBox_lb1000.setPrice(new BigDecimal("20.00"));

        litterBoxes.add(litterBox_lb1000);

        return litterBoxes;
    }
}