package com.sinovdeath.PetsOwnerSimulator.entities.items.feeder;

import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

public class Feeder extends Item {
    protected FeederImage image;
    protected String feederType;
    protected Integer currentSlots;
    protected Integer maxSlots;
    protected Integer intervalsToBecomeDirty;
    protected Integer dirtinessCalmDown;

    public void becomeDirty() {
        FeederImage currentImage = image;
        currentImage.setCurrentImage(currentImage.getWaterDirty());
    }

    public void refillAndClean() {
        currentSlots = maxSlots;
        dirtinessCalmDown = intervalsToBecomeDirty;
        FeederImage currentImage = image;
        currentImage.setCurrentImage(currentImage.getWaterFull());
    }

    public FeederImage getImage() { return image; }
    public void setImage(FeederImage image) { this.image = image; }

    public String getFeederType() { return feederType; }
    public void setFeederType(String feederType) { this.feederType = feederType; }

    public Integer getCurrentSlots() { return currentSlots; }
    public void setCurrentSlots(Integer currentSlots) { this.currentSlots = currentSlots; }

    public Integer getMaxSlots() { return maxSlots; }
    public void setMaxSlots(Integer maxSlots) { this.maxSlots = maxSlots; }

    public Integer getIntervalsToBecomeDirty() { return intervalsToBecomeDirty; }
    public void setIntervalsToBecomeDirty(Integer intervalsToBecomeDirty) { this.intervalsToBecomeDirty = intervalsToBecomeDirty; }

    public Integer getDirtinessCalmDown() { return dirtinessCalmDown; }
    public void setDirtinessCalmDown(Integer dirtinessCalmDown) { this.dirtinessCalmDown = dirtinessCalmDown; }

    @Override
    public String toString() {
        return "Feeder{" +
                "image=" + image +
                ", feederType='" + feederType + '\'' +
                ", currentSlots=" + currentSlots +
                ", maxSlots=" + maxSlots +
                ", intervalsToBecomeDirty=" + intervalsToBecomeDirty +
                ", dirtinessCalmDown=" + dirtinessCalmDown +
                '}';
    }

    public boolean isBowlEmpty() {
        return currentSlots == 0;
    }
}
