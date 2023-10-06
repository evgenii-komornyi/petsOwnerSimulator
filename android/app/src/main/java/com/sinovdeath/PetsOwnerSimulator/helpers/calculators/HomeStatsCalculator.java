package com.sinovdeath.PetsOwnerSimulator.helpers.calculators;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;

public class HomeStatsCalculator {
    public static int calculatePoopOnCarpetCount(int currentValue) {
        return Math.min(currentValue + Constants.POOP_ON_CARPET_COUNT_INCREASE, Constants.MAX_POOP_ON_CARPET_COUNT);
    }

    public static int calculateSmell(int currentSmellValue, int currentPoopOnCarpetCount) {
        int calculatedValue = currentSmellValue + currentPoopOnCarpetCount;

        return Math.min(calculatedValue, Constants.MAX_SMELL_LEVEL);
    }

    public static int calculateSmellWithOpenedWindow(int currentSmellValue) {
        int calculatedValue = currentSmellValue - Constants.SMELL_DECREASE;

        return Math.max(calculatedValue, 0);
    }

    public static int calculateToyDurability(int currentDurability) {
        return Math.max(currentDurability - 1, 0);
    }
}
