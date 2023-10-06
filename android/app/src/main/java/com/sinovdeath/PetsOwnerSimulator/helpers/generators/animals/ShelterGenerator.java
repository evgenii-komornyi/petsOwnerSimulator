package com.sinovdeath.PetsOwnerSimulator.helpers.generators.animals;

import com.sinovdeath.PetsOwnerSimulator.entities.shelter.ShelterAnimal;
import com.sinovdeath.PetsOwnerSimulator.enums.AnimalType;

import java.util.ArrayList;
import java.util.List;

public class ShelterGenerator {
    public static List<ShelterAnimal> generateShelter() {
        List<ShelterAnimal> shelterAnimals = new ArrayList<>();
        ShelterAnimal catsInShelter = new ShelterAnimal(AnimalType.CATS.getAnimalType(), CatsGenerator.generateCats());
        ShelterAnimal dogsInShelter = new ShelterAnimal(AnimalType.DOGS.getAnimalType(), DogsGenerator.generateDogs());
        ShelterAnimal fishInShelter = new ShelterAnimal(AnimalType.FISH.getAnimalType(), FishGenerator.generateFish());

        shelterAnimals.add(catsInShelter);
//        shelterAnimals.add(dogsInShelter);
//        shelterAnimals.add(fishInShelter);

        return shelterAnimals;
    }
}
