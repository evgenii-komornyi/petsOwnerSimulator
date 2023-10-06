package com.sinovdeath.PetsOwnerSimulator.modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.sinovdeath.PetsOwnerSimulator.services.home.HomeService;
import com.sinovdeath.PetsOwnerSimulator.services.home.IHomeService;
import com.sinovdeath.PetsOwnerSimulator.services.pets.IPetsService;

public class HomeModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext _context;
    private static IHomeService _homeService;

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

    public static synchronized IHomeService getHomeService() {
        return _homeService;
    }
}
