package com.sinovdeath.PetsOwnerSimulator.Services.Owner;

import com.google.android.exoplayer2.util.Log;
import com.sinovdeath.PetsOwnerSimulator.Constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Food.Food;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Inventory;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators.Calculator;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Converters.Converter;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Workers.Worker;
import com.sinovdeath.PetsOwnerSimulator.Managers.OwnerManager;

import java.math.BigDecimal;
import java.util.HashMap;

public class OwnerService implements IOwnerService {
    @Override
    public String increaseHappyPetCoins() {
        Owner owner = OwnerManager.getCurrentOwner();
        owner.setHappyPetCoins(Calculator.increaseHappyPetCoins(owner.getHappyPetCoins()));
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
    public String feedPet(String petId, String itemId) {
        Owner currentOwner = OwnerManager.getCurrentOwner();

        currentOwner.feedPet(petId, itemId);

        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String buyItem(String itemType, String itemToBuy) {
        Item item = Converter.convertItemFromString(itemType, itemToBuy);
        Owner owner = OwnerManager.getCurrentOwner();
        owner.setInventory(Converter.createInventoryWithCorrectItems(itemType, item));
        owner.setHappyPetCoins(Calculator.calculateHappyPetCoins(owner, item));
        OwnerManager.setOwner(owner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String interactWithWindow() {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.interactWithWindow();
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String cleanRoom() {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.cleanRoom();
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String cleanLitterBox() {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.cleanLitterBox();
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }
}
