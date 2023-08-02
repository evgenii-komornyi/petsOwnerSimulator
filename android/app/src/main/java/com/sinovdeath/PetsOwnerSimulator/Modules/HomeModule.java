package com.sinovdeath.PetsOwnerSimulator.Modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.sinovdeath.PetsOwnerSimulator.Services.Home.HomeService;

public class HomeModule extends ReactContextBaseJavaModule {
    ReactApplicationContext _context;
    HomeService _homeService;

    public HomeModule(ReactApplicationContext _context) {
        this._context = _context;
        this._homeService = new HomeService();
    }

    @NonNull
    @Override
    public String getName() {
        return "Home";
    }

    @ReactMethod
    public void calculateStats(Promise promise) { promise.resolve(_homeService.calculateStats()); }
}
