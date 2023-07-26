package com.sinovdeath.PetsOwnerSimulator.Entities.Items.House;

import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;

public abstract class House extends Item {
    protected HouseImage image;

    public HouseImage getImage() {
        return image;
    }

    public void setImage(HouseImage image) {
        this.image = image;
    }
}
