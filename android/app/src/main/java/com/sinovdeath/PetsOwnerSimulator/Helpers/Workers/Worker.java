package com.sinovdeath.PetsOwnerSimulator.Helpers.Workers;

import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Food.Food;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Inventory;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Animal;

import java.util.HashMap;
import java.util.List;

public class Worker {
    public static List<Item> addItem(List<Item> items, Item newItem, Owner owner) {
        if (newItem instanceof ICountable) {
            boolean itemExists = false;
            for (Item existingItem : items) {
                if (existingItem.getId().equals(newItem.getId())) {
                    ((ICountable) existingItem).setCount(((ICountable) existingItem).getCount() + ((ICountable) newItem).getCount());
                    itemExists = true;
                    break;
                }
            }

            if (!itemExists) {
                items.add(newItem);
            }
        }

        return items;
    }
}
