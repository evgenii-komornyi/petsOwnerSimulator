package com.sinovdeath.PetsOwnerSimulator.entities.owner;

import androidx.annotation.NonNull;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.alert.Alert;
import com.sinovdeath.PetsOwnerSimulator.entities.home.Home;
import com.sinovdeath.PetsOwnerSimulator.entities.items.food.Food;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.enums.WindowState;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.Calculator;

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

    public Owner(String id, String name) {
        this.id = id;
        this.name = name;
        this.happyPetCoins = new BigDecimal(Constants.HPC);
        this.pets = new ArrayList<>();
        this.home = new Home();
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
        home.setIsWindowOpen(home.checkIsWindowOpened() ? WindowState.CLOSED.getWindowState() : WindowState.OPENED.getWindowState());
    }

    @Override
    public void cleanRoom() {
        home.setPoopOnCarpetCount(0);
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
        LitterBox litterBox = (LitterBox) inventory.getLitterBox();
        litterBox.setSlots(litterBox.getMaxSlots());
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Owner owner = (Owner) o;
        return Objects.equals(id, owner.id) && Objects.equals(name, owner.name) && Objects.equals(happyPetCoins, owner.happyPetCoins) && Objects.equals(home, owner.home) && Objects.equals(pets, owner.pets) && Objects.equals(inventory, owner.inventory);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, happyPetCoins, home, pets, inventory);
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
                '}';
    }
}
