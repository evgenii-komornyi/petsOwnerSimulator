package com.sinovdeath.PetsOwnerSimulator.Helpers.Generators;

import com.google.gson.Gson;

import java.util.UUID;

public class Generator {
    public static String generateID() {
        return UUID.randomUUID().toString();
    }

    public static String generateJson(Object object) {
        return new Gson().toJson(object);
    }
}
