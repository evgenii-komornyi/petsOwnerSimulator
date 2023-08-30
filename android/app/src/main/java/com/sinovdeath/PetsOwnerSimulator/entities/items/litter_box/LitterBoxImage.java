package com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box;

import com.sinovdeath.PetsOwnerSimulator.entities.items.Image;

public class LitterBoxImage extends Image {
    private String used;
    private String empty;
    private String full;

    public String getUsed() {
        return used;
    }

    public void setUsed(String used) {
        this.used = used;
    }

    public String getEmpty() {
        return empty;
    }

    public void setEmpty(String empty) {
        this.empty = empty;
    }

    public String getFull() {
        return full;
    }

    public void setFull(String full) {
        this.full = full;
    }
}
