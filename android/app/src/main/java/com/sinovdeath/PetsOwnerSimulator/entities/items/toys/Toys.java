package com.sinovdeath.PetsOwnerSimulator.entities.items.toys;

import com.sinovdeath.PetsOwnerSimulator.entities.items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

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
