package com.sinovdeath.PetsOwnerSimulator.Managers;

import com.sinovdeath.PetsOwnerSimulator.Entities.Alert.Sound;

public class SoundManager {
    private static final Sound sad = new Sound("sad", 3);
    private static final Sound poo = new Sound("poo", 7);

    public static Sound getSadSound() {
        return sad;
    }

    public static Sound getPooSound() {
        return poo;
    }

}
