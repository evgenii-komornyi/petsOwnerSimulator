package com.sinovdeath.PetsOwnerSimulator.entities.items.house;

import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

public abstract class House extends Item {
    protected HouseImage image;

    public HouseImage getImage() {
        return image;
    }

    public void setImage(HouseImage image) {
        this.image = image;
    }
}
