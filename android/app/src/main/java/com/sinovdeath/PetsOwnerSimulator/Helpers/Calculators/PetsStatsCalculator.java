package com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators;

import com.sinovdeath.PetsOwnerSimulator.Constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.Entities.Stats.MoodStats;
import com.sinovdeath.PetsOwnerSimulator.Entities.Stats.Stats;
import com.sinovdeath.PetsOwnerSimulator.Enums.SwipeType;

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

    public static int increaseMoodBySwipeDirection(MoodStats moodIncrease, Stats currentPetStats, String swipeDirection) {
        int currentMood = currentPetStats.getMood();
        int calculatedMoodBySwipeDirection = 0;

        if (swipeDirection == null) {
            calculatedMoodBySwipeDirection = currentMood + 1;
        } else if (swipeDirection.equals(SwipeType.UP.getSwipeDirection())) {
            calculatedMoodBySwipeDirection = currentMood + moodIncrease.getUp();
        } else if (swipeDirection.equals(SwipeType.DOWN.getSwipeDirection())) {
            calculatedMoodBySwipeDirection = currentMood + moodIncrease.getDown();
        } else if (swipeDirection.equals(SwipeType.RIGHT.getSwipeDirection())) {
            calculatedMoodBySwipeDirection = currentMood + moodIncrease.getRight();
        } else if (swipeDirection.equals(SwipeType.LEFT.getSwipeDirection())) {
            calculatedMoodBySwipeDirection = currentMood + moodIncrease.getLeft();
        } else if (swipeDirection.equals(SwipeType.DIAGONAL.getSwipeDirection())) {
            calculatedMoodBySwipeDirection = currentMood + moodIncrease.getDiagonal();
        }

        return Math.min(calculatedMoodBySwipeDirection, Constants.MAX_MOOD_LEVEL);
    }
}
