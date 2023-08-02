package com.sinovdeath.PetsOwnerSimulator.Entities.Owner;

import com.google.android.exoplayer2.util.Log;
import com.sinovdeath.PetsOwnerSimulator.Constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.Entities.Home.Home;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Food.Food;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.LitterBox.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.Entities.Stats.Stats;
import com.sinovdeath.PetsOwnerSimulator.Enums.WindowState;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators.Calculator;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators.PetsStatsCalculator;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Converters.Converter;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Workers.Worker;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

public class Owner implements IOwner, Serializable {
    private String id;
    private String name;
    private BigDecimal happyPetCoins;
    private Home home;
    private final List<HashMap<String, Animal>> pets;
    private Inventory inventory;

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
            Calculator.calculatePetsInFeedingTime(pets, petId, foodToFeedPet);
        }
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
