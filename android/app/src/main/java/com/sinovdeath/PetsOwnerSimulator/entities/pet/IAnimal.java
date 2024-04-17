package com.sinovdeath.PetsOwnerSimulator.entities.pet;

import com.sinovdeath.PetsOwnerSimulator.entities.items.food.Food;

public interface IAnimal {
    void poop();

    void pee();

    void eat(Food foodToFeed);

    boolean drink();
}
