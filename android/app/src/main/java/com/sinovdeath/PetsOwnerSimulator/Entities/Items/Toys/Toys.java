package com.sinovdeath.PetsOwnerSimulator.Entities.Items.Toys;

import com.sinovdeath.PetsOwnerSimulator.Entities.Items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;

public class Toys extends Item implements ICountable {
    private String forAnimal;
    private ToysImage image;
    private int count;

    public String getForAnimal() {
        return forAnimal;
    }

    public void setForAnimal(String forAnimal) {
        this.forAnimal = forAnimal;
    }

    public ToysImage getImage() {
        return image;
    }

    public void setImage(ToysImage image) {
        this.image = image;
    }

    @Override
    public Integer getCount() {
        return count;
    }

    @Override
    public void setCount(Integer count) {
        this.count = count;
    }
}
