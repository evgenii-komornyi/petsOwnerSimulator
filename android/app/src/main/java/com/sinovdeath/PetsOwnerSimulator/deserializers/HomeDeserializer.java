package com.sinovdeath.PetsOwnerSimulator.deserializers;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.sinovdeath.PetsOwnerSimulator.entities.home.Home;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;

import java.lang.reflect.Type;

public class HomeDeserializer implements JsonDeserializer<Home> {
    @Override
    public Home deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
        JsonObject jsonObject = json.getAsJsonObject();

        LivingRoom livingRoom = context.deserialize(jsonObject.get("livingRoom"), LivingRoom.class);

        Home home = new Home();
        home.setLivingRoom(livingRoom);

        return home;
    }
}