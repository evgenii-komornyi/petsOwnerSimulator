package com.sinovdeath.PetsOwnerSimulator.modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.sinovdeath.PetsOwnerSimulator.services.pets.IPetsService;
import com.sinovdeath.PetsOwnerSimulator.services.pets.PetsService;

public class PetsModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext _context;
    private static IPetsService _petsService;

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
    public void calculateStats() {
        _petsService.calculateStats();
    }

    public static synchronized IPetsService getPetsService() {
        return _petsService;
    }
}
