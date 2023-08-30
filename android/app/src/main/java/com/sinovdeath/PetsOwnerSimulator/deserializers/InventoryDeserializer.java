package com.sinovdeath.PetsOwnerSimulator.deserializers;

import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.sinovdeath.PetsOwnerSimulator.entities.items.house.CatHouse;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Inventory;

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
            Item toyItem = context.deserialize(toyElement, Item.class);
            toys.add(toyItem);
        }
        inventory.setToys(toys);

        JsonObject litterBoxObject = jsonObject.getAsJsonObject("litterBox");
        LitterBox litterBox = context.deserialize(litterBoxObject, LitterBox.class);
        inventory.setLitterBox(litterBox);

        JsonObject catHouseObject = jsonObject.getAsJsonObject("catHouse");
        CatHouse catHouse = context.deserialize(catHouseObject, CatHouse.class);
        inventory.setCatHouse(catHouse);

        return inventory;
    }
}