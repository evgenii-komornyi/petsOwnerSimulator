package com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators;

import com.sinovdeath.PetsOwnerSimulator.Constants.Constants;

import java.math.BigDecimal;

public class PetsStatsCalculator {
    public static Boolean isPetNotDead(int health) {
        return health != 0;
    }

    public static Boolean isPetStillHappy(int health, int satiety, int mood) {
        return health > 0 && satiety > 0 && mood > 0;
    }

    public static int increaseHealthLevel(int currentHealthLevel, int increaseValue) {
        return  Math.min(currentHealthLevel + increaseValue, Constants.MAX_HEALTH_LEVEL);
    }

    public static int decreaseHealthLevel(int currentHealthLevel, int decreaseValue) {
        return Math.max(currentHealthLevel - decreaseValue, 0);
    }

    public static int decreaseSatietyLevel(int currentSatietyLevel, int decreaseValue) {
        return Math.max(currentSatietyLevel - decreaseValue, 0);
    }

    public static int decreaseDigestionLevel(int currentDigestionLevel, int decreaseValue) {
        return Math.max(currentDigestionLevel - decreaseValue, 0);
    }

    public static int decreaseMoodLevel(int currentMoodLevel, int decreaseValue) {
        return Math.max(currentMoodLevel - decreaseValue, 0);
    }

    public static int increaseSatietyAfterFeeding(int currentPetSatiety, int satisfaction) {
        return Math.min(currentPetSatiety + satisfaction, 100);
    }
}
