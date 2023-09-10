package com.sinovdeath.PetsOwnerSimulator.helpers.workers;

import com.sinovdeath.PetsOwnerSimulator.entities.items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

import java.util.List;

public class Worker {
    public static List<Item> addItem(List<Item> items, Item newItem) {
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
