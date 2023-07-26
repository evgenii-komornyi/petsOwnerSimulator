package com.sinovdeath.PetsOwnerSimulator.Modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.sinovdeath.PetsOwnerSimulator.Entities.Shelter.Shelter;

public class ShelterModule extends ReactContextBaseJavaModule {
    ReactApplicationContext _context;
    Shelter _shelter;

    public ShelterModule(ReactApplicationContext context) {
        super(context);
        _context = context;
        _shelter = new Shelter();
    }

    @NonNull
    @Override
    public String getName() {
        return "Shelter";
    }

    @ReactMethod
    public void getShelter(Promise promise) {
        promise.resolve(new Gson().toJson(_shelter));
    }
}
