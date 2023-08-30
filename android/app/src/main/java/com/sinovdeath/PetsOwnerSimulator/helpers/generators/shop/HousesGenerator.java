package com.sinovdeath.PetsOwnerSimulator.helpers.generators.shop;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.items.house.CatHouse;
import com.sinovdeath.PetsOwnerSimulator.entities.items.house.HouseImage;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemType;
import com.sinovdeath.PetsOwnerSimulator.enums.UriType;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class HousesGenerator {
    public static List<Item> generateHouses() {
        List<Item> houses = new ArrayList<>();

        CatHouse catHouse_ch9000 = new CatHouse();
        catHouse_ch9000.setId("ch-9000");
        catHouse_ch9000.setName("CH-9000");
        catHouse_ch9000.setType(ItemType.CAT_HOUSE.getItemType());
        HouseImage catHouse_ch9000Image = new HouseImage();
        catHouse_ch9000Image.setUnused(String.format("%s/%s/%s%s", Constants.ASSETS_HOUSES_FOLDER, catHouse_ch9000.getId(), UriType.UNUSED.getUriValue(), Constants.IMAGE_EXT));
        catHouse_ch9000.setImage(catHouse_ch9000Image);
        catHouse_ch9000.setPrice(new BigDecimal("20.00"));

        houses.add(catHouse_ch9000);

        return houses;
    }
}
