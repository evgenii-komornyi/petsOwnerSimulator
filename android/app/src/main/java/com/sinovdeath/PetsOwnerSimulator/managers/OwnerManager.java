package com.sinovdeath.PetsOwnerSimulator.managers;

import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;

public class OwnerManager {
    private static Owner owner;

    public static void setOwner(Owner newOwner) {
        owner = newOwner;
    }

    public static Owner getCurrentOwner() {
        return owner;
    }
}
