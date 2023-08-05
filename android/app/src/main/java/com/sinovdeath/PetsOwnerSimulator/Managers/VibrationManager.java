package com.sinovdeath.PetsOwnerSimulator.Managers;

import com.sinovdeath.PetsOwnerSimulator.Entities.Alert.Vibration;

public class VibrationManager {
    private static final Vibration zeroSatiety = new Vibration(1);
    private static final Vibration zeroMood = new Vibration(1);
    private static final Vibration zeroHealth = new Vibration(2);
    private static final Vibration poopingPet = new Vibration(100);

    public static Vibration getZeroSatiety() {
        return zeroSatiety;
    }

    public static Vibration getZeroMood() {
        return zeroMood;
    }

    public static Vibration getZeroHealth() {
        return zeroHealth;
    }

    public static Vibration getPoopingPet() {
        return poopingPet;
    }
}
