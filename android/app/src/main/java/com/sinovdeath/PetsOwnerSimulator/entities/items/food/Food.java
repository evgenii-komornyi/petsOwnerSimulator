package com.sinovdeath.PetsOwnerSimulator.entities.items.food;

import com.sinovdeath.PetsOwnerSimulator.entities.items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

public class Food extends Item implements ICountable {
    private String forAnimal;
    private FoodImage image;
    private Integer satisfaction;
    private Integer count;

    public Integer getSatisfaction() {
        return satisfaction;
    }

    public void setSatisfaction(Integer satisfaction) {
        this.satisfaction = satisfaction;
    }

    public String getForAnimal() {
        return forAnimal;
    }

    public void setForAnimal(String forAnimal) {
        this.forAnimal = forAnimal;
    }

    public FoodImage getImage() {
        return image;
    }

    public void setImage(FoodImage image) {
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

    @Override
    public String toString() {
        return "Food{" +
                "count=" + count +
                '}';
    }


}
