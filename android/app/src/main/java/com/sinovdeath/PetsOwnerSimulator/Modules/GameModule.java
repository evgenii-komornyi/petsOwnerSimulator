package com.sinovdeath.PetsOwnerSimulator.Modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.android.exoplayer2.util.Log;
import com.google.gson.Gson;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.Managers.OwnerManager;
import com.sinovdeath.PetsOwnerSimulator.Services.Game.GameService;
import com.sinovdeath.PetsOwnerSimulator.Services.Game.IGameService;

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
    public void loadGame(Promise promise) {
        _gameService.read();

        Owner currentOwner = OwnerManager.getCurrentOwner();
        String ownerDTO = new Gson().toJson(currentOwner);

        promise.resolve(ownerDTO);
    }
}
