package com.sinovdeath.PetsOwnerSimulator.entities.shelter;

import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;

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
