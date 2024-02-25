package com.sinovdeath.PetsOwnerSimulator.managers;

import com.sinovdeath.PetsOwnerSimulator.entities.alert.Sound;

public class SoundManager {
    private static final Sound sad = new Sound("sad", 3);
    private static final Sound poo = new Sound("poo", 7);
    private static final Sound drink = new Sound("drink", 7);

    public static Sound getSadSound() {
        return sad;
    }

    public static Sound getPooSound() {
        return poo;
    }

    public static Sound getDrinkSound() { return drink ; }
}
