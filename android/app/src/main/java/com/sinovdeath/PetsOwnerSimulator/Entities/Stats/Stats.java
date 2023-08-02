package com.sinovdeath.PetsOwnerSimulator.Entities.Stats;

public class Stats {
    private int health;
    private int satiety;
    private int mood;
    private int digestion;

    public Stats(int health, int satiety, int mood, int digestion) {
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

    public int getMood() {
        return mood;
    }

    public int getDigestion() {
        return digestion;
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public void setSatiety(int satiety) {
        this.satiety = satiety;
    }

    public void setMood(int mood) {
        this.mood = mood;
    }

    public void setDigestion(int digestion) {
        this.digestion = digestion;
    }
}
