package com.sinovdeath.PetsOwnerSimulator.Entities.Owner;

import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;

public interface IOwner {
    void adoptPet(Animal adoptedPet);

//    void feedPet(int petId, int satietyIncrement);
//    Boolean cleanRoom();
//    Boolean cleanLitterBox();
//    Boolean openCloseWindow();
}
