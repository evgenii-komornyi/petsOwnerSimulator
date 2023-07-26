package com.sinovdeath.PetsOwnerSimulator.Modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.sinovdeath.PetsOwnerSimulator.Entities.Shop.Shop;

public class ShopModule extends ReactContextBaseJavaModule {
    ReactApplicationContext _context;
    Shop _shop;

    public ShopModule(ReactApplicationContext context) {
        super(context);
        _context = context;
        _shop = new Shop();
    }

    @NonNull
    @Override
    public String getName() {
        return "Shop";
    }

    @ReactMethod
    public void getShop(Promise promise) {
        promise.resolve(new Gson().toJson(_shop));
    }
}
