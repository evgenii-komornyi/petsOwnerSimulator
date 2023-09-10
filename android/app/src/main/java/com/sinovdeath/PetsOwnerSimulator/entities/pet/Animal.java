package com.sinovdeath.PetsOwnerSimulator.entities.pet;

import com.sinovdeath.PetsOwnerSimulator.entities.home.Home;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.stats.Stats;
import com.sinovdeath.PetsOwnerSimulator.entities.stats.StatsIncreasing;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.HomeStatsCalculator;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;

public abstract class Animal implements IAnimal {
    protected String id;
    protected String name;
    protected Image img;
    protected Animation animation;
    protected String bio;
    protected Stats maxValues;
    protected Stats stats;
    protected Stats statsReducing;
    protected StatsIncreasing statsIncreasing;
    protected boolean wasTaken;
    protected String type;

    public Animal() {}

    @Override
    public void poop() {
        Owner owner = OwnerManager.getCurrentOwner();
        LitterBox litterBox = (LitterBox) owner.getInventory().getLitterBox();

        if (litterBox == null || !litterBox.getPetPoop()) {
            Home home = owner.getHome();
            home.setPoopOnCarpetCount(HomeStatsCalculator.calculatePoopOnCarpetCount(home.getPoopOnCarpetCount()));
        }
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

    public Animation getAnimation() { return animation; }

    public void setAnimation(Animation animation) { this.animation = animation; }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Stats getMaxValues() { return maxValues; }

    public void setMaxValues(Stats maxValues) { this.maxValues = maxValues; }

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
