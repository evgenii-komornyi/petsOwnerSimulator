package com.sinovdeath.PetsOwnerSimulator.Helpers.Generators.Animals;

import com.sinovdeath.PetsOwnerSimulator.Entities.Shelter.ShelterAnimal;

import java.util.ArrayList;
import java.util.List;

public class ShelterGenerator {
    public static List<ShelterAnimal> generateShelter() {
        List<ShelterAnimal> shelterAnimals = new ArrayList<>();

        ShelterAnimal catsInShelter = new ShelterAnimal("Cats", CatsGenerator.generateCats());
        ShelterAnimal dogsInShelter = new ShelterAnimal("Dogs", DogsGenerator.generateDogs());
        ShelterAnimal fishInShelter = new ShelterAnimal("Fish", FishGenerator.generateFish());
        shelterAnimals.add(catsInShelter);
        shelterAnimals.add(dogsInShelter);
        shelterAnimals.add(fishInShelter);

        return shelterAnimals;
    }
}
