package com.sinovdeath.PetsOwnerSimulator.Entities.Items.Food;

import com.sinovdeath.PetsOwnerSimulator.Entities.Items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;

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
