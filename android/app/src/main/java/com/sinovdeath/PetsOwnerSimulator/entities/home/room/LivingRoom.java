package com.sinovdeath.PetsOwnerSimulator.entities.home.room;

import java.io.Serializable;

public class LivingRoom extends Room implements Serializable {
    private int poopOnCarpetCount;
    private int smell;
    private boolean isWindowOpen;

    public int getPoopOnCarpetCount() { return poopOnCarpetCount; }

    public void setPoopOnCarpetCount(int poopOnCarpetCount) { this.poopOnCarpetCount = poopOnCarpetCount; }

    public int getSmell() { return smell; }

    public void setSmell(int smell) { this.smell = smell; }

    public boolean getIsWindowOpen() { return isWindowOpen; }

    public boolean checkIsWindowOpened() {
        return isWindowOpen;
    }

    public void setIsWindowOpen(boolean windowOpen) { isWindowOpen = windowOpen; }

    @Override
    public String toString() {
        return "LivingRoom{" +
                "poopOnCarpetCount=" + poopOnCarpetCount +
                ", smell=" + smell +
                ", isWindowOpen=" + isWindowOpen +
                ", roomType='" + roomType + '\'' +
                ", image=" + image +
                ", toy=" + toy +
                ", litterBox=" + litterBox +
                ", catHouse=" + catHouse +
                '}';
    }
}
