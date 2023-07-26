package com.sinovdeath.PetsOwnerSimulator.Entities.Shelter;

import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Animal;

import java.io.Serializable;
import java.util.List;

public class ShelterAnimal implements Serializable {
    private String type;
    private List<Animal> pets;

    public ShelterAnimal(String type, List<Animal> pets) {
        this.type = type;
        this.pets = pets;
    }
}
