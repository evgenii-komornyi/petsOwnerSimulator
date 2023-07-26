package com.sinovdeath.PetsOwnerSimulator.Entities.Pet;

public class Cat extends Animal implements IPoopable {
    @Override
    public Boolean poop() {
        return false;
    }
}
