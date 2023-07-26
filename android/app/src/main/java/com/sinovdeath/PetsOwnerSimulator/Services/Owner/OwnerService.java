package com.sinovdeath.PetsOwnerSimulator.Services.Owner;

import com.sinovdeath.PetsOwnerSimulator.Constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators.Calculator;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Converters.Converter;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.Managers.OwnerManager;

import java.math.BigDecimal;

public class OwnerService implements IOwnerService {
    @Override
    public String increaseHappyPetCoins() {
        Owner owner = OwnerManager.getCurrentOwner();
        BigDecimal augend = new BigDecimal(Constants.HPC_INCREMENT_VALUE);

        owner.setHappyPetCoins(owner.getHappyPetCoins().add(augend));

        OwnerManager.setOwner(owner);

        return Generator.generateJson(OwnerManager.getCurrentOwner().getHappyPetCoins());
    }

    @Override
    public String adoptPet(String petType, String petToAdopt) {
        Animal pet = Converter.convertPetFromString(petType, petToAdopt);

        Owner owner = OwnerManager.getCurrentOwner();

        owner.adoptPet(pet);

        OwnerManager.setOwner(owner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String buyItem(String itemType, String itemToBuy) {
        Item item = Converter.convertItemFromString(itemType, itemToBuy);

        Owner owner = OwnerManager.getCurrentOwner();

        owner.setInventory(Converter.createInventoryWithCorrectItems(itemType, item));
        owner.setHappyPetCoins(Calculator.calculateHPC(owner, item));

        OwnerManager.setOwner(owner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }
}
