package com.sinovdeath.PetsOwnerSimulator.helpers.converters;

import com.google.gson.Gson;
import com.sinovdeath.PetsOwnerSimulator.entities.home.Home;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;
import com.sinovdeath.PetsOwnerSimulator.entities.items.food.Food;
import com.sinovdeath.PetsOwnerSimulator.entities.items.house.CatHouse;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.InteractToy;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.NonInteractToy;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.Toy;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Inventory;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Cat;
import com.sinovdeath.PetsOwnerSimulator.enums.AnimalType;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemType;
import com.sinovdeath.PetsOwnerSimulator.enums.ToyType;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;

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
            Gson gson = new Gson();
            Toy toy = gson.fromJson(itemToBuy, Toy.class);

            if (ToyType.INTERACT.getToyType().equals(toy.getToyType())) {
                item = gson.fromJson(itemToBuy, InteractToy.class);
            } else if (ToyType.NON_INTERACT.getToyType().equals(toy.getToyType())) {
                item = gson.fromJson(itemToBuy, NonInteractToy.class);
            } else {
                item = toy;
            }
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
            existingInventory.addFood(itemToBuy);
        }

        if (type.equals(ItemType.TOYS.getItemType().toLowerCase())) {
            Toy toy = (Toy) itemToBuy;
            String toyType = toy.getToyType();

            if (toyType.equals(ToyType.INTERACT.getToyType())) {
                existingInventory.addToy((InteractToy) itemToBuy);
            } else if (toyType.equals(ToyType.NON_INTERACT.getToyType())) {
                existingInventory.addToy((NonInteractToy) itemToBuy);
            }
        }

        return existingInventory;
    }

    public static Home createHomeWithCorrectItems(Item item) {
        Owner owner = OwnerManager.getCurrentOwner();
        Home home = owner.getHome();
        LivingRoom livingRoom = home.getLivingRoom();

        if (item.getType().equals(ItemType.LITTER_BOX.getItemType())) {
            livingRoom.setLitterBox(item);
        }

        if (item.getType().equals(ItemType.CAT_HOUSE.getItemType())) {
            livingRoom.setCatHouse(item);
        }

        home.setLivingRoom(livingRoom);

        return home;
    }
}
