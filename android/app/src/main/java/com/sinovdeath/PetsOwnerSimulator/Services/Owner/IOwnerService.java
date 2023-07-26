package com.sinovdeath.PetsOwnerSimulator.Services.Owner;

public interface IOwnerService {
    String increaseHappyPetCoins();
    String adoptPet(String petType, String petToAdopt);
    String buyItem(String itemType, String itemToBuy);
}
