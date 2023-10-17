package com.sinovdeath.PetsOwnerSimulator.deserializers;

import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.InteractToy;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.NonInteractToy;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Inventory;
import com.sinovdeath.PetsOwnerSimulator.enums.ToyType;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

public class InventoryDeserializer implements JsonDeserializer<Inventory> {
    @Override
    public Inventory deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
        JsonObject jsonObject = json.getAsJsonObject();
        Inventory inventory = new Inventory();

        JsonArray foodArray = jsonObject.getAsJsonArray("food");
        List<Item> foods = new ArrayList<>();
        for (JsonElement foodElement : foodArray) {
            Item foodItem = context.deserialize(foodElement, Item.class);
            foods.add(foodItem);
        }
        inventory.setFood(foods);

        JsonArray toysArray = jsonObject.getAsJsonArray("toys");

        List<Item> toys = new ArrayList<>();
        for (JsonElement toyElement : toysArray) {
            JsonObject toyObject = toyElement.getAsJsonObject();
            String toyType = toyObject.get("toyType").getAsString();

            Item toyItem = null;

            if (toyType.equals(ToyType.NON_INTERACT.getToyType())) {
                toyItem = context.deserialize(toyElement, NonInteractToy.class);
            } else if (toyType.equals(ToyType.INTERACT.getToyType())) {
                toyItem = context.deserialize(toyElement, InteractToy.class);
            }

            toys.add(toyItem);
        }
        inventory.setToys(toys);

        JsonArray otherItemsArray = jsonObject.getAsJsonArray("otherItems");
        if (otherItemsArray != null) {
            List<Item> otherItems = new ArrayList<>();
            for (JsonElement itemElement : otherItemsArray) {
                Item otherItem = context.deserialize(itemElement, Item.class);
                otherItems.add(otherItem);
            }
            inventory.setOtherItems(otherItems);
        }

        return inventory;
    }
}