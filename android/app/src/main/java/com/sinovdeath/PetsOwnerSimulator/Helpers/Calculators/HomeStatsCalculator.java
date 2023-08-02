package com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators;

import com.sinovdeath.PetsOwnerSimulator.Constants.Constants;

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
}
