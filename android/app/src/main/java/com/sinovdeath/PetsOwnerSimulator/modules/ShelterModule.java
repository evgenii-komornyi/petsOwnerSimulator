package com.sinovdeath.PetsOwnerSimulator.modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.sinovdeath.PetsOwnerSimulator.entities.shelter.Shelter;

public class ShelterModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext _context;
    private final Shelter _shelter;

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
