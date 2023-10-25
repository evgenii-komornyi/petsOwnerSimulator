package com.sinovdeath.PetsOwnerSimulator.entities.owner;

import android.os.Build;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.alert.Alert;
import com.sinovdeath.PetsOwnerSimulator.entities.home.Home;
import com.sinovdeath.PetsOwnerSimulator.entities.items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.items.food.Food;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.NonInteractToy;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.Toy;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.enums.WindowState;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.Calculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.ItemsCalculator;

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
        home
                .getLivingRoom()
                .setIsWindowOpen(home.
                        getLivingRoom()
                        .checkIsWindowOpened() ?
                            WindowState.CLOSED.getWindowState() :
                            WindowState.OPENED.getWindowState());
    }

    @Override
    public void cleanRoom() {
        home.getLivingRoom().setPoopOnCarpetCount(0);
    }

    @Override
    public void feedPet(String petId, String itemId) {
        Food foodToFeedPet = Calculator.calculateFoodCountAfterFeeding(inventory.getFood(), itemId);

        if (foodToFeedPet != null) {
            Calculator.calculatePetInFeedingTime(pets, petId, foodToFeedPet);
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

    public BigDecimal getHappyPetCoins() {
        return happyPetCoins;
    }

    public Home getHome() {
        return home;
    }

    public List<HashMap<String, Animal>> getPets() {
        return pets;
    }
    public Inventory getInventory() {
        return inventory;
    }
    public Alert getAlert() {
        return alert;
    }
    public String getVersion() { return version; }

    public void setName(String name) {
        this.name = name;
    }

    public void setHappyPetCoins(BigDecimal happyPetCoins) {
        this.happyPetCoins = happyPetCoins;
    }

    public void setHome(Home home) {
        this.home = home;
    }

    public void setInventory(Inventory inventory) {
        this.inventory = inventory;
    }

    public void setAlert(Alert alert) {
        this.alert = alert;
    }

    public void setVersion(String version) { this.version = version; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Owner owner = (Owner) o;
        return Objects.equals(id, owner.id) && Objects.equals(name, owner.name) && Objects.equals(happyPetCoins, owner.happyPetCoins) && Objects.equals(home, owner.home) && Objects.equals(pets, owner.pets) && Objects.equals(inventory, owner.inventory);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, happyPetCoins, home, pets, inventory, version);
    }

    @NonNull
    @Override
    public String toString() {
        return "Owner{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", happyPetCoins=" + happyPetCoins +
                ", home=" + home +
                ", pets=" + pets +
                ", inventory=" + inventory +
                ", version=" + version +
                '}';
    }
}
