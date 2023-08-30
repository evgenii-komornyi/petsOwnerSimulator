package com.sinovdeath.PetsOwnerSimulator.deserializers;

import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Cat;
import com.sinovdeath.PetsOwnerSimulator.enums.AnimalType;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AnimalMapListDeserializer implements JsonDeserializer<List<HashMap<String, Animal>>> {
    @Override
    public List<HashMap<String, Animal>> deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
        List<HashMap<String, Animal>> animalMapList = new ArrayList<>();
        JsonArray jsonArray = json.getAsJsonArray();

        for (JsonElement element : jsonArray) {
            JsonObject jsonObject = element.getAsJsonObject();
            HashMap<String, Animal> animalMap = new HashMap<>();

            for (Map.Entry<String, JsonElement> entry : jsonObject.entrySet()) {
                String key = entry.getKey();
                JsonElement value = entry.getValue();

                if (value.isJsonObject()) {
                    JsonObject animalObject = value.getAsJsonObject();
                    String typeName = animalObject.get("type").getAsString();
                    Animal animal = null;

                    if (typeName.equals(AnimalType.CATS.getAnimalType())) {
                        animal = context.deserialize(animalObject, Cat.class);
                    }

                    if (animal != null) {
                        animalMap.put(key, animal);
                    }
                }
            }

            animalMapList.add(animalMap);
        }
        return animalMapList;
    }
}