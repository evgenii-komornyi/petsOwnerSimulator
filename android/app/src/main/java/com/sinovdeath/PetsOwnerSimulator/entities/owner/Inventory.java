package com.sinovdeath.PetsOwnerSimulator.entities.owner;

import com.sinovdeath.PetsOwnerSimulator.entities.items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Inventory implements Serializable {
    private List<Item> food;
    private List<Item> toys;

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

    public void setFood(List<Item> food) { this.food = food; }
    public void setToys(List<Item> toys) { this.toys = toys; }

    public void addFood(Item newFood) {
        if (!_hasChangedItemCount(food, newFood)) {
            food.add(newFood);
        }
    }

    public void addToy(Item newToy) {
        if (!_hasChangedItemCount(toys, newToy)) {
            toys.add(newToy);
        }
    }

    private boolean _hasChangedItemCount(List<Item> itemsInInventory, Item countableItemToChange) {
        for (Item existingItem : itemsInInventory) {
            if (existingItem.getId().equals(countableItemToChange.getId())) {
                if (existingItem instanceof ICountable && countableItemToChange instanceof ICountable) {
                    ((ICountable) existingItem).setCount(((ICountable) existingItem).getCount() +
                            ((ICountable) countableItemToChange).getCount());
                }

                return true;
            }
        }

        return false;
    }

    @Override
    public String toString() {
        return "Inventory{" +
                "food=" + food +
                ", toys=" + toys +
                '}';
    }
}
