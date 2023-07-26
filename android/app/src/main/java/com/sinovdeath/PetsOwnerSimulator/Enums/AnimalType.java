package com.sinovdeath.PetsOwnerSimulator.Enums;

public enum AnimalType {
    CATS("Cats"), DOGS("Dogs"), FISH("Fish");

    private String animal;

    AnimalType(String animalType) {
        animal = animalType;
    }

    public String getAnimalType() {
        return animal;
    }
}
