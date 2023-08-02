package com.sinovdeath.PetsOwnerSimulator.Entities.Owner;

import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Food.Food;
import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Animal;

public interface IOwner {
    void adoptPet(Animal adoptedPet);
    void interactWithWindow();
    void feedPet(String petId, String itemId);
    void cleanRoom();
    void cleanLitterBox();
}
