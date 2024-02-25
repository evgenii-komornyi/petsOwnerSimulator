package com.sinovdeath.PetsOwnerSimulator.deserializers;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.sinovdeath.PetsOwnerSimulator.entities.items.feeder.Bowl;
import com.sinovdeath.PetsOwnerSimulator.entities.items.food.Food;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher.CatHouse;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.Toy;

import java.lang.reflect.Type;

public class ItemDeserializer implements JsonDeserializer<Item> {
    @Override
    public Item deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
        JsonObject jsonObject = json.getAsJsonObject();
        String type = jsonObject.get("type").getAsString();
        switch (type) {
            case "food":
                return context.deserialize(json, Food.class);
            case "toys":
                return context.deserialize(json, Toy.class);
            case "litterBox":
                return context.deserialize(json, LitterBox.class);
            case "catHouse":
                return context.deserialize(json, CatHouse.class);
            case "waterBowl":
                return context.deserialize(json, Bowl.class);
            default:
                throw new JsonParseException("Unknown item type: " + type);
        }
    }
}