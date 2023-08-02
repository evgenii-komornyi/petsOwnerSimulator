package com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators;

public class ItemsCalculator {
    public static int decreaseFoodCountInFeedingTime(int count, int decreaseValue) {
        return Math.max(count - decreaseValue, 0);
    }
}
