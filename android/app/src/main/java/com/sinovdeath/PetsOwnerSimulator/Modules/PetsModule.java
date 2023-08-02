package com.sinovdeath.PetsOwnerSimulator.Modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.sinovdeath.PetsOwnerSimulator.Services.Pets.PetsService;

public class PetsModule extends ReactContextBaseJavaModule {
    ReactApplicationContext _context;
    PetsService _petsService;

    public PetsModule(ReactApplicationContext context) {
        super(context);
        _context = context;
        _petsService = new PetsService();
    }

    @NonNull
    @Override
    public String getName() {
        return "Pets";
    }

    @ReactMethod
    public void calculateStats(Promise promise) {
        promise.resolve(_petsService.calculateStats());
    }
}
