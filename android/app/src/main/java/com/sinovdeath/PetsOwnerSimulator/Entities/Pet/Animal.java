package com.sinovdeath.PetsOwnerSimulator.Entities.Pet;

import com.sinovdeath.PetsOwnerSimulator.Entities.Stats.Stats;
import com.sinovdeath.PetsOwnerSimulator.Entities.Stats.StatsIncreasing;

public abstract class Animal implements IAnimal {
    protected String id;
    protected String name;
    protected Image img;
    protected String bio;
    protected Stats stats;
    protected Stats statsReducing;
    protected StatsIncreasing statsIncreasing;
    protected boolean wasTaken;
    protected String type;

    public Animal() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Image getImg() {
        return img;
    }

    public void setImg(Image img) {
        this.img = img;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Stats getStats() {
        return stats;
    }

    public void setStats(Stats stats) {
        this.stats = stats;
    }

    public Stats getStatsReducing() {
        return statsReducing;
    }

    public void setStatsReducing(Stats statsReducing) {
        this.statsReducing = statsReducing;
    }

    public StatsIncreasing getStatsIncreasing() {
        return statsIncreasing;
    }

    public void setStatsIncreasing(StatsIncreasing statsIncreasing) {
        this.statsIncreasing = statsIncreasing;
    }

    public boolean isWasTaken() {
        return wasTaken;
    }

    public void setWasTaken(boolean wasTaken) {
        this.wasTaken = wasTaken;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
