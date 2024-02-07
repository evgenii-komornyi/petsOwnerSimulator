package com.sinovdeath.PetsOwnerSimulator.entities.items.feeder;

import com.sinovdeath.PetsOwnerSimulator.entities.items.Image;

public class FeederImage extends Image {
    private String waterFull;
    private String waterDirty;
    private String empty;

    public String getWaterFull() { return waterFull; }
    public void setWaterFull(String waterFull) { this.waterFull = waterFull; }

    public String getWaterDirty() { return waterDirty; }
    public void setWaterDirty(String waterDirty) { this.waterDirty = waterDirty; }

    public String getEmpty() { return empty; }
    public void setEmpty(String empty) { this.empty = empty; }
}
