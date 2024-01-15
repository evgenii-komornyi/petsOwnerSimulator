package com.sinovdeath.PetsOwnerSimulator.entities.items.food;

import com.sinovdeath.PetsOwnerSimulator.entities.items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

public class Food extends Item implements ICountable {
    private FoodImage image;
    private Integer satisfaction;
    private Integer count;

    public Integer getSatisfaction() {
        return satisfaction;
    }
    public void setSatisfaction(Integer satisfaction) {
        this.satisfaction = satisfaction;
    }

    public FoodImage getImage() {
        return image;
    }
    public void setImage(FoodImage image) {
        this.image = image;
    }

    @Override
    public int getCount() {
        return count;
    }
    @Override
    public void setCount(int count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "Food{" +
                "image=" + image +
                ", satisfaction=" + satisfaction +
                ", count=" + count +
                ", id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", forAnimal='" + forAnimal + '\'' +
                ", price=" + price +
                '}';
    }
}
