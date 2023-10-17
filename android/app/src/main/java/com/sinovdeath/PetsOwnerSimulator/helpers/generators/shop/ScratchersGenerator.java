package com.sinovdeath.PetsOwnerSimulator.helpers.generators.shop;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher.CatHouse;
import com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher.ScratcherImage;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemType;
import com.sinovdeath.PetsOwnerSimulator.enums.UriType;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class ScratchersGenerator {
    public static List<Item> generateScratchers() {
        List<Item> scratchers = new ArrayList<>();

        CatHouse catHouse_ch500 = new CatHouse();
        catHouse_ch500.setId("ch-500");
        catHouse_ch500.setName("CH-500");
        catHouse_ch500.setMaxDurability(500);
        catHouse_ch500.setStepImageChange(100);
        catHouse_ch500.setDurability(catHouse_ch500.getMaxDurability());
        catHouse_ch500.setType(ItemType.CAT_HOUSE.getItemType());
        ScratcherImage catHouse_ch500Image = new ScratcherImage();
        catHouse_ch500Image.setFullyDamagedImage(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_SCRATCHERS_FOLDER, catHouse_ch500.getId(), "scratched_000", Constants.IMAGE_EXT));
        List<String> damagedImagesPaths = new ArrayList<>();
        damagedImagesPaths.add(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_SCRATCHERS_FOLDER, catHouse_ch500.getId(), "scratched_100", Constants.IMAGE_EXT));
        damagedImagesPaths.add(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_SCRATCHERS_FOLDER, catHouse_ch500.getId(), "scratched_200", Constants.IMAGE_EXT));
        damagedImagesPaths.add(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_SCRATCHERS_FOLDER, catHouse_ch500.getId(), "scratched_300", Constants.IMAGE_EXT));
        damagedImagesPaths.add(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_SCRATCHERS_FOLDER, catHouse_ch500.getId(), "scratched_400", Constants.IMAGE_EXT));
        damagedImagesPaths.add(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_SCRATCHERS_FOLDER, catHouse_ch500.getId(), UriType.UNUSED.getUriValue(), Constants.IMAGE_EXT));
        catHouse_ch500Image.setDamagedImages(damagedImagesPaths);
        catHouse_ch500Image.setCurrentImage(damagedImagesPaths.get(damagedImagesPaths.size() - 1));
        catHouse_ch500.setImage(catHouse_ch500Image);
        catHouse_ch500.setPrice(new BigDecimal("50.00"));

        scratchers.add(catHouse_ch500);

        return scratchers;
    }
}
