package com.sinovdeath.PetsOwnerSimulator.Managers;

import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;

public class OwnerManager {
    private static Owner owner;

    public static void setOwner(Owner newOwner) {
        owner = newOwner;
    }

    public static Owner getCurrentOwner() {
        return owner;
    }
}
