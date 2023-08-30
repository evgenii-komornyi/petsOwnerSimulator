package com.sinovdeath.PetsOwnerSimulator.modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.google.gson.Gson;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;
import com.sinovdeath.PetsOwnerSimulator.services.game.GameService;
import com.sinovdeath.PetsOwnerSimulator.services.game.IGameService;

public class GameModule extends ReactContextBaseJavaModule {
    ReactApplicationContext _context;
    IGameService _gameService;

    public GameModule(ReactApplicationContext context) {
        super(context);
        _context = context;
        _gameService = new GameService(_context);
    }

    @NonNull
    @Override
    public String getName() {
        return "Game";
    }

    @ReactMethod
    public void saveGame() {
        _gameService.write();
    }

    @ReactMethod
    public void loadGame(ReadableMap params, Promise promise) {
        _gameService.read(params.getString("saveMoment"));

        Owner currentOwner = OwnerManager.getCurrentOwner();
        String ownerDTO = new Gson().toJson(currentOwner);

        promise.resolve(ownerDTO);
    }
}
