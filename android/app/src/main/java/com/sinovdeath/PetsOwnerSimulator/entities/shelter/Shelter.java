package com.sinovdeath.PetsOwnerSimulator.entities.shelter;

import com.sinovdeath.PetsOwnerSimulator.helpers.generators.animals.ShelterGenerator;

import java.io.Serializable;
import java.util.List;

public class Shelter implements Serializable {
    private final String shelterName;
    private final List<ShelterAnimal> animals;

    public Shelter() {
        this.shelterName = "Shelter";
        this.animals = ShelterGenerator.generateShelter();
    }

    public String getShelterName() {
        return shelterName;
    }

    public List<ShelterAnimal> getAnimals() {
        return animals;
    }
}
