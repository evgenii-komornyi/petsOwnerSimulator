package com.sinovdeath.PetsOwnerSimulator.modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.sinovdeath.PetsOwnerSimulator.entities.shop.Shop;

public class ShopModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext _context;
    private final Shop _shop;

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
