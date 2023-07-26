package com.sinovdeath.PetsOwnerSimulator.Deserializers;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Food.Food;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Toys.Toys;

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
                return context.deserialize(json, Toys.class);
            // Add more cases for other subclasses of Item if needed
            default:
                throw new JsonParseException("Unknown item type: " + type);
        }
    }
}