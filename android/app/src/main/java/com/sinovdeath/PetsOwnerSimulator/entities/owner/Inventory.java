package com.sinovdeath.PetsOwnerSimulator.entities.owner;

import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

import java.util.ArrayList;
import java.util.List;

public class Inventory {
    private List<Item> food;
    private List<Item> toys;
    private Item litterBox;
    private Item catHouse;

    public Inventory() {
        this.food = new ArrayList<>();
        this.toys = new ArrayList<>();
    }

    public List<Item> getFood() {
        return food;
    }

    public List<Item> getToys() {
        return toys;
    }

    public Item getLitterBox() {
        return litterBox;
    }

    public Item getCatHouse() {
        return catHouse;
    }

    public void setLitterBox(Item litterBox) {
        this.litterBox = litterBox;
    }

    public void setCatHouse(Item catHouse) {
        this.catHouse = catHouse;
    }

    public void setFood(List<Item> food) {
        this.food = food;
    }

    public void setToys(List<Item> toys) {
        this.toys = toys;
    }

    @Override
    public String toString() {
        return "Inventory{" +
                "food=" + food +
                ", toys=" + toys +
                ", litterBox=" + litterBox +
                ", catHouse=" + catHouse +
                '}';
    }
}
