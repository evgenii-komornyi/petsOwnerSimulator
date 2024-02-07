package com.sinovdeath.PetsOwnerSimulator.entities.owner;

import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;

public interface IOwner {
    void adoptPet(Animal adoptedPet);
    void interactWithWindow();
    void refillAndCleanBowl();
    void feedPet(String petId, String itemId);
    void petPet(String petId, String swipeDirection);
    void sayGoodbye(String petId);
    void cleanRoom();
    void cleanLitterBox();
    void putItemInRoom(Item itemToPut);
}
