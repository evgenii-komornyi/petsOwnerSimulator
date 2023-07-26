package com.sinovdeath.PetsOwnerSimulator.Entities.Owner;

import com.sinovdeath.PetsOwnerSimulator.Constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;

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
//    private Home home;
//    private LitterBox litterBox;
//    private CatHouse catHouse;
    private final List<HashMap<String, Animal>> pets;
    private Inventory inventory;

    public Owner(String id, String name) {
        this.id = id;
        this.name = name;
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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getHappyPetCoins() {
        return happyPetCoins;
    }

    public void setHappyPetCoins(BigDecimal happyPetCoins) {
        this.happyPetCoins = happyPetCoins;
    }

    @Override
    public String toString() {
        return "Owner{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", happyPetCoins=" + happyPetCoins +
                '}';
    }

    public List<HashMap<String , Animal>> getPets() {
        return pets;
    }

    public void setInventory(Inventory inventory) {
        this.inventory = inventory;
    }

    public Inventory getInventory() {
        return inventory;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Owner owner = (Owner) o;
        return Objects.equals(id, owner.id) && Objects.equals(name, owner.name) && Objects.equals(happyPetCoins, owner.happyPetCoins) && Objects.equals(pets, owner.pets) && Objects.equals(inventory, owner.inventory);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, happyPetCoins, pets, inventory);
    }
}
