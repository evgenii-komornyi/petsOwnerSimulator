package com.sinovdeath.PetsOwnerSimulator.Helpers.Converters;

import com.google.gson.Gson;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Food.Food;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.House.CatHouse;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.LitterBox.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Toys.Toys;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Inventory;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Cat;
import com.sinovdeath.PetsOwnerSimulator.Enums.AnimalType;
import com.sinovdeath.PetsOwnerSimulator.Enums.ItemType;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Workers.Worker;
import com.sinovdeath.PetsOwnerSimulator.Managers.OwnerManager;

public class Converter {
    public static Animal convertPetFromString(String petType, String petToAdopt) {
        Animal pet = null;

        if (petType.equals(AnimalType.CATS.getAnimalType())) {
            pet = new Gson().fromJson(petToAdopt, Cat.class);
        }

        return pet;
    }

    public static Item convertItemFromString(String type, String itemToBuy) {
        Item item = null;

        if (type.equals(ItemType.FOOD.getItemType().toLowerCase())) {
            item = new Gson().fromJson(itemToBuy, Food.class);
        }

        if (type.equals(ItemType.TOYS.getItemType().toLowerCase())) {
            item = new Gson().fromJson(itemToBuy, Toys.class);
        }

        if (type.equals(ItemType.LITTER_BOX.getItemType())) {
            item = new Gson().fromJson(itemToBuy, LitterBox.class);
        }

        if (type.equals(ItemType.CAT_HOUSE.getItemType())) {
            item = new Gson().fromJson(itemToBuy, CatHouse.class);
        }

        return item;
    }

    public static Inventory createInventoryWithCorrectItems(String type, Item itemToBuy) {
        Owner owner = OwnerManager.getCurrentOwner();
        Inventory existingInventory = owner.getInventory();

        if (type.equals(ItemType.FOOD.getItemType().toLowerCase())) {
            existingInventory.setFood(Worker.addItem(existingInventory.getFood(), itemToBuy, owner));
        }

        if (type.equals(ItemType.TOYS.getItemType().toLowerCase())) {
            existingInventory.setToys(Worker.addItem(existingInventory.getToys(), itemToBuy, owner));
        }

        if (type.equals(ItemType.LITTER_BOX.getItemType())) {
            existingInventory.setLitterBox(itemToBuy);
        }

        if (type.equals(ItemType.CAT_HOUSE.getItemType())) {
            existingInventory.setCatHouse(itemToBuy);
        }

        return existingInventory;
    }
}
