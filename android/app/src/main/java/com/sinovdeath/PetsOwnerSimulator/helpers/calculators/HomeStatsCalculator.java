package com.sinovdeath.PetsOwnerSimulator.helpers.calculators;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;

public class HomeStatsCalculator {
    public static int calculatePoopOnFloorCount(int currentValue) {
        return _getMinValue(currentValue + Constants.EXCRETE_ON_FLOOR_COUNT_INCREASE, Constants.MAX_EXCRETE_ON_FLOOR_COUNT);
    }

    public static int calculatePeeOnFloorCount(int peeOnFloorCount) {
        return _getMinValue(peeOnFloorCount + Constants.EXCRETE_ON_FLOOR_COUNT_INCREASE, Constants.MAX_EXCRETE_ON_FLOOR_COUNT);
    }

    public static int calculateSmell(int currentSmellValue, int currentExcreteOnFloorCount) {
        return _getMinValue(currentSmellValue + currentExcreteOnFloorCount, Constants.MAX_SMELL_LEVEL);
    }

    public static int calculateSmellWithOpenedWindow(int currentSmellValue, int decreaser) {
        return _getMaxValue(currentSmellValue - decreaser, 0);
    }

    public static int calculateToyDurability(int currentDurability, int damage) {
        return _getMaxValue(currentDurability - damage, 0);
    }

    public static int calculateScratcherDurability(int currentDurability, int damage) {
        return _getMaxValue(currentDurability - damage, 0);
    }

    public static int calculateWaterBowlDirtiness(int currentDirtinessCalmDown, int decreaser) {
        return _getMaxValue(currentDirtinessCalmDown - decreaser, 0);
    }

    public static int calculateBowlSlotAfterPetDrinking(int currentSlots, int decreaser) {
        return _getMaxValue(currentSlots - decreaser, 0);
    }

    private static int _getMaxValue(int firstValue, int secondValue) {
        return Math.max(firstValue, secondValue);
    }

    private static int _getMinValue(int firstValue, int secondValue) {
        return Math.min(firstValue, secondValue);
    }
}
