package com.sinovdeath.PetsOwnerSimulator.entities.pet;

import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.excrete.Pee;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.excrete.Poop;
import com.sinovdeath.PetsOwnerSimulator.entities.items.feeder.Bowl;
import com.sinovdeath.PetsOwnerSimulator.entities.items.food.Food;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.stats.Stats;
import com.sinovdeath.PetsOwnerSimulator.entities.stats.StatsIncreasing;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.HomeStatsCalculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.PetsStatsCalculator;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;

import java.util.Random;

public abstract class Animal implements IAnimal {
    protected String id;
    protected String name;
    protected Image img;
    protected String currentImage;
    protected Animation animation;
    protected String bio;
    protected Stats minValues;
    protected Stats maxValues;
    protected Stats stats;
    protected Stats statsReducing;
    protected StatsIncreasing statsIncreasing;
    protected boolean wasTaken;
    protected String type;

    public Animal() {
    }

    @Override
    public void poop() {
        Owner owner = OwnerManager.getCurrentOwner();
        LivingRoom livingRoom = owner.getHome().getLivingRoom();
        LitterBox litterBox = (LitterBox) livingRoom.getLitterBox();
        Poop poop = livingRoom.getExcrete().getPoop();

        if (litterBox == null || !litterBox.getPetExcrete()) {
            poop.setPoopOnFloorCount(HomeStatsCalculator.calculatePoopOnFloorCount(poop.getPoopOnFloorCount()));
        }
    }

    @Override
    public void pee() {
        Owner owner = OwnerManager.getCurrentOwner();
        LivingRoom livingRoom = owner.getHome().getLivingRoom();
        LitterBox litterBox = (LitterBox) livingRoom.getLitterBox();
        Pee pee = livingRoom.getExcrete().getPee();

        if (litterBox == null || !litterBox.getPetExcrete()) {
            pee.setPeeOnFloorCount(HomeStatsCalculator.calculatePeeOnFloorCount(pee.getPeeOnFloorCount()));
        }
    }

    @Override
    public void eat(Food foodToFeedPet) {
        int currentPetSatiety = stats.getSatiety();

        if (foodToFeedPet != null) {
            int currentDigestion = stats.getDigestion();

            stats.setSatiety(PetsStatsCalculator.increaseSatietyAfterFeeding(currentPetSatiety, foodToFeedPet.getSatisfaction(), maxValues.getSatiety()));

            if (currentDigestion == 0) {
                stats.setDigestion(statsIncreasing.getDigestion());
            }
        }
    }

    @Override
    public boolean drink() {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        Bowl waterBowl = (Bowl) currentOwner.getHome().getLivingRoom().getFeeder();

        if (waterBowl != null && waterBowl.getCurrentSlots() > 0) {
            return _tryDrinkFromBowl(waterBowl);
        } else {
            return false;
        }

    }

    private boolean _tryDrinkFromBowl(Bowl waterBowl) {
        waterBowl.setCurrentSlots(HomeStatsCalculator.calculateBowlSlotAfterPetDrinking(waterBowl.getCurrentSlots(), 1));
        int minValue = minValues.getHydration();
        Random random = new Random();
        int randomValue = random.nextInt(maxValues.getHydration() - minValue) + minValue;
        stats.setHydration(randomValue);

        if (waterBowl.getDirtinessCalmDown() == 0) {
            stats.setHealth(PetsStatsCalculator.decreaseHealthLevel(stats.getHealth(), 60));
        }

        return true;
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

    public String getCurrentImage() {
        return currentImage;
    }

    public void setCurrentImage(String currentImage) {
        this.currentImage = currentImage;
    }

    public Animation getAnimation() {
        return animation;
    }

    public void setAnimation(Animation animation) {
        this.animation = animation;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Stats getMinValues() {
        return minValues;
    }

    public void setMinValues(Stats minValues) {
        this.minValues = minValues;
    }

    public Stats getMaxValues() {
        return maxValues;
    }

    public void setMaxValues(Stats maxValues) {
        this.maxValues = maxValues;
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

    public boolean getWasTaken() {
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
