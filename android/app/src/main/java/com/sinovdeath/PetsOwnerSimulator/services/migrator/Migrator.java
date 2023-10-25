package com.sinovdeath.PetsOwnerSimulator.services.migrator;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.enums.UriType;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;

public class Migrator implements IMigrator {
    @Override
    public Owner migrateOwnerByVersion(Owner currentOwner) {
        String version = currentOwner.getVersion();

        if (version == null || version.isEmpty()) {
            currentOwner.setVersion("1.0");
            List<HashMap<String, Animal>> pets = currentOwner.getPets();
            if (!pets.isEmpty()) {
                for (HashMap<String, Animal> petMap : pets) {
                    for (Animal pet : petMap.values()) {
                        pet.getMaxValues().setHealth(1500);
                        pet.getImg().setBlinking(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_CATS_FOLDER, pet.getName().toLowerCase(), UriType.BLINKING.getUriValue(), Constants.IMAGE_EXT));
                    }
                }
            }
        }

        return currentOwner;
    }
}
