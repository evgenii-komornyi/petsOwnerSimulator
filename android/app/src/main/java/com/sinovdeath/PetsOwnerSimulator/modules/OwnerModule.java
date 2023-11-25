package com.sinovdeath.PetsOwnerSimulator.modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.google.gson.Gson;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;
import com.sinovdeath.PetsOwnerSimulator.services.owner.IOwnerService;
import com.sinovdeath.PetsOwnerSimulator.services.owner.OwnerService;

public class OwnerModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext _context;
    private final IOwnerService _ownerService;

    public OwnerModule(ReactApplicationContext context) {
        super(context);
        _context = context;
        _ownerService = new OwnerService(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "Owner";
    }

    @ReactMethod
    public void getOwner(Promise promise) {
        promise.resolve(getCurrentOwnerInJSON());
    }

    @ReactMethod
    public void updateHPC(Promise promise) {
        promise.resolve(_ownerService.increaseHappyPetCoins());
    }

    @ReactMethod
    public void adoptPet(ReadableMap params, Promise promise) {
        promise.resolve(_ownerService.adoptPet(params.getString("petType"), params.getString("petToAdopt")));
    }

    @ReactMethod
    public void feedPet(ReadableMap params, Promise promise) {
        promise.resolve(_ownerService.feedPet(params.getString("petId"), params.getString("itemId")));
    }

    @ReactMethod
    public void petPet(ReadableMap params, Promise promise) {
        promise.resolve(_ownerService.petPet(params.getString("petId"), params.getString("swipeDirection")));
    }

    @ReactMethod
    public void sayGoodbye(ReadableMap params, Promise promise) {
        promise.resolve(_ownerService.sayGoodbye(params.getString("petId")));
    }

    @ReactMethod
    public void buyItem(ReadableMap params, Promise promise) {
        promise.resolve(_ownerService.buyItem(params.getString("itemType"), params.getString("itemToBuy")));
    }

    @ReactMethod
    public void interactWithWindow(Promise promise) { promise.resolve(_ownerService.interactWithWindow()); }

    @ReactMethod
    public void cleanRoom(Promise promise) {
        promise.resolve(_ownerService.cleanRoom());
    }

    @ReactMethod
    public void cleanLitterBox(Promise promise) { promise.resolve(_ownerService.cleanLitterBox()); }

    @ReactMethod
    public void putItemInRoom(ReadableMap params, Promise promise) {
        promise.resolve(_ownerService.putItemInRoom(params.getString("itemType"), params.getString("itemToPut")));
    }

    @ReactMethod
    public void saveNotification(ReadableMap params, Promise promise) {
        promise.resolve(_ownerService.saveNotification(params.getString("title"), params.getString("body")));
    }

    @ReactMethod
    public void changeAlarmActivity(ReadableMap params, Promise promise) {
        promise.resolve(_ownerService.changeAlarmActivity(params.getInt("id"), params.getBoolean("activityFlag")));
    }

    @ReactMethod
    public void changeAlarmTime(ReadableMap params, Promise promise) {
        promise.resolve(_ownerService.changeAlarmTime(params.getInt("id"), params.getInt("hours"), params.getInt("minutes")));
    }

    private String getCurrentOwnerInJSON() {
        return new Gson().toJson(OwnerManager.getCurrentOwner());
    }
}
