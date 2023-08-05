package com.sinovdeath.PetsOwnerSimulator.Services.Owner;

public interface IOwnerService {
    String increaseHappyPetCoins();
    String adoptPet(String petType, String petToAdopt);
    String feedPet(String petId, String itemId);
    String petPet(String petId, String swipeDirection);
    String sayGoodbye(String petId);
    String buyItem(String itemType, String itemToBuy);
    String interactWithWindow();
    String cleanRoom();
    String cleanLitterBox();
}
