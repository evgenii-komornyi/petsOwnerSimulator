package com.sinovdeath.PetsOwnerSimulator.entities.stats;

public class Stats {
    private int health;
    private int satiety;
    private int mood;
    private int digestion;
    private int toyPlayCount;
    private int happiness;

    public Stats() {}

    public int getHealth() { return health; }
    public void setHealth(int health) { this.health = health; }

    public int getSatiety() { return satiety; }
    public void setSatiety(int satiety) { this.satiety = satiety; }

    public int getMood() { return mood; }
    public void setMood(int mood) { this.mood = mood; }

    public int getDigestion() { return digestion; }
    public void setDigestion(int digestion) { this.digestion = digestion; }

    public int getHappiness() { return happiness; }
    public void setHappiness(int happiness) { this.happiness = happiness; }

    public int getToyPlayCount() { return toyPlayCount; }
    public void setToyPlayCount(int toyPlayCount) { this.toyPlayCount = toyPlayCount; }
}
