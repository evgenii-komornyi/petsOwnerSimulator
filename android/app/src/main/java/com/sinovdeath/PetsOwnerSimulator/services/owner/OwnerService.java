package com.sinovdeath.PetsOwnerSimulator.services.owner;

import android.os.Build;

import androidx.annotation.RequiresApi;

import com.google.android.exoplayer2.util.Log;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemType;
import com.sinovdeath.PetsOwnerSimulator.enums.ToyType;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.Calculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.converters.Converter;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;

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
    public String petPet(String petId, String swipeDirection) {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.petPet(petId, swipeDirection);
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String sayGoodbye(String petId) {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.sayGoodbye(petId);
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String buyItem(String itemType, String itemToBuy) {
        Item item = Converter.convertItemFromString(itemType, itemToBuy);
        Owner owner = OwnerManager.getCurrentOwner();

        if (itemType.equals(ItemType.LITTER_BOX.getItemType()) || itemType.equals(ItemType.CAT_HOUSE.getItemType()))
        {
            owner.setHome(Converter.createHomeWithCorrectItems(item));
        }

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

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public String putItemInRoom(String itemType, String itemToPut) {
        Item item = Converter.convertItemFromString(itemType, itemToPut);
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.putItemInRoom(item);
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }
}
