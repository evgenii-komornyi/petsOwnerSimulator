package com.sinovdeath.PetsOwnerSimulator.entities.owner;

import android.os.Build;

import android.util.Log;
import androidx.annotation.RequiresApi;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.alert.Alert;
import com.sinovdeath.PetsOwnerSimulator.entities.home.Home;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Window;
import com.sinovdeath.PetsOwnerSimulator.entities.items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.items.feeder.Bowl;
import com.sinovdeath.PetsOwnerSimulator.entities.items.feeder.Feeder;
import com.sinovdeath.PetsOwnerSimulator.entities.items.food.Food;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.NonInteractToy;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.Toy;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Settings;
import com.sinovdeath.PetsOwnerSimulator.enums.WindowImage;
import com.sinovdeath.PetsOwnerSimulator.enums.WindowState;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.Calculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.ItemsCalculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

public class Owner implements IOwner, Serializable {
    private final String id;
    private String name;
    private BigDecimal happyPetCoins;
    private Home home;
    private final List<HashMap<String, Animal>> pets;
    private Inventory inventory;
    private Alert alert;
    private Settings settings;
    private String version;

    public Owner(String id, String name, String version) {
        this.id = id;
        this.name = name;
        this.version = version;
        this.happyPetCoins = new BigDecimal(Constants.HPC);
        this.pets = new ArrayList<>();
        this.inventory = new Inventory();
    }

    @Override
    public void adoptPet(Animal adoptedPet) {
        HashMap<String, Animal> petToAdopt = new HashMap<>();
        petToAdopt.put(adoptedPet.getId(), adoptedPet);

        pets.add(petToAdopt);
    }

    @Override
    public void interactWithWindow() {
        LivingRoom livingRoom = home.getLivingRoom();
        Window window = livingRoom.getWindow();

        if (window.checkIsWindowOpened()) {
            window.setIsWindowOpen(WindowState.CLOSED.getWindowState());
            window.setCurrentWindowImage(_generateWindowImagePath(WindowImage.CLOSED_DAY.getWindowImage()));
        } else {
            window.setIsWindowOpen(WindowState.OPENED.getWindowState());
            window.setCurrentWindowImage(_generateWindowImagePath(WindowImage.OPENED_DAY.getWindowImage()));
        };
    }

    @Override
    public void refillAndCleanBowl() {
        LivingRoom livingRoom = home.getLivingRoom();
        Bowl bowl = (Bowl) livingRoom.getFeeder();

        if (bowl != null) {
            bowl.refillAndClean();
        }
    }

    private static String _generateWindowImagePath(String fileName) {
        return Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_WINDOWS_FOLDER, fileName, Constants.IMAGE_EXT);
    }

    @Override
    public void cleanRoom() {
        home.getLivingRoom().getExcrete().getPoop().setPoopOnFloorCount(0);
        home.getLivingRoom().getExcrete().getPee().setPeeOnFloorCount(0);
    }

    @Override
    public void feedPet(String petId, String itemId) {
        Food foodToFeedPet = Calculator.calculateFoodCountAfterFeeding(inventory.getFood(), itemId);

        if (foodToFeedPet != null) {
            for (HashMap<String, Animal> petMap : pets) {
                Animal pet = petMap.get(petId);
                if (pet != null) {
                    pet.eat(foodToFeedPet);
                }
            }
        }
    }

    @Override
    public void petPet(String petId, String swipeDirection) {
        Calculator.calculatePetInPettingTime(pets, petId, swipeDirection);
    }

    @Override
    public void sayGoodbye(String petId) {
        Calculator.calculateIsPetTaken(pets, petId);
    }

    @Override
    public void cleanLitterBox() {
        LitterBox litterBox = (LitterBox) home.getLivingRoom().getLitterBox();
        litterBox.setSlots(litterBox.getMaxSlots());
        litterBox.getImage().setCurrentImage(litterBox.getImage().getEmpty());
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public void putItemInRoom(Item itemToPut) {
        Item toyInInventory = inventory.getToys()
                .stream()
                .filter(item -> item.getId().equals(itemToPut.getId()))
                .findFirst()
                .orElse(null);

        Toy toyInRoom = (Toy) home.getLivingRoom().getToy();
        Toy itemToPutAsToy = (Toy) itemToPut;

        if (toyInRoom != null && toyInRoom.getId() != null && itemToPutAsToy != null && toyInRoom.getId().equals(itemToPutAsToy.getId())) {
            if (toyInRoom instanceof NonInteractToy && itemToPutAsToy instanceof NonInteractToy) {
                NonInteractToy nonInteractToyInRoom = (NonInteractToy) toyInRoom;
                NonInteractToy nonInteractItemToPut = (NonInteractToy) itemToPutAsToy;

                nonInteractToyInRoom.setDurability(nonInteractToyInRoom.getDurability() + nonInteractItemToPut.getDurability());
            }
        } else {
            home.getLivingRoom().setToy(itemToPut);
        }

        if (toyInInventory != null) {
            if (toyInInventory instanceof ICountable) {
                ICountable countableItem = (ICountable) toyInInventory;
                countableItem.setCount(ItemsCalculator.decreaseToyCountWhenItPutInRoom(countableItem.getCount(), 1));

                if (countableItem.getCount() == 0) {
                    inventory.getToys().remove(countableItem);
                }
            }
        }
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public Home getHome() {
        return home;
    }
    public void setHome(Home home) { this.home = home; }

    public List<HashMap<String, Animal>> getPets() { return pets; }

    public Inventory getInventory() { return inventory; }
    public void setInventory(Inventory inventory) {
        this.inventory = inventory;
    }

    public Alert getAlert() { return alert; }
    public void setAlert(Alert alert) {
        this.alert = alert;
    }

    public String getVersion() { return version; }
    public void setVersion(String version) { this.version = version; }


    public BigDecimal getHappyPetCoins() { return happyPetCoins; }
    public void setHappyPetCoins(BigDecimal happyPetCoins) { this.happyPetCoins = happyPetCoins; }

    public Settings getSettings() { return settings; }
    public void setSettings(Settings settings) { this.settings = settings; }

    @Override
    public String toString() {
        return "Owner{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", happyPetCoins=" + happyPetCoins +
                ", home=" + home +
                ", pets=" + pets +
                ", inventory=" + inventory +
                ", alert=" + alert +
                ", settings=" + settings +
                ", version='" + version + '\'' +
                '}';
    }
}
