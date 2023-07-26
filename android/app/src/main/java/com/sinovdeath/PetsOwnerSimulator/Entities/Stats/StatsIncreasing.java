package com.sinovdeath.PetsOwnerSimulator.Entities.Stats;

public class StatsIncreasing {
    private int health;
    private int satiety;
    private MoodStats mood;
    private int digestion;

    public StatsIncreasing(int health, int satiety, MoodStats mood, int digestion) {
        this.health = health;
        this.satiety = satiety;
        this.mood = mood;
        this.digestion = digestion;
    }

    public int getHealth() {
        return health;
    }

    public int getSatiety() {
        return satiety;
    }

    public MoodStats getMood() {
        return mood;
    }

    public int getDigestion() {
        return digestion;
    }
}
