package com.sinovdeath.PetsOwnerSimulator.helpers.calculators;

public class ItemsCalculator {
    public static int decreaseFoodCountInFeedingTime(int count, int decreaseValue) {
        return Math.max(count - decreaseValue, 0);
    }

    public static int decreaseToyCountWhenItPutInRoom(int count, int decreaseValue) {
        return Math.max(count - decreaseValue, 0);
    }
}
