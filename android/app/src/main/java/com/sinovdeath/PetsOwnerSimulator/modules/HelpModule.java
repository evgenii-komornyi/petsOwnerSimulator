package com.sinovdeath.PetsOwnerSimulator.modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.sinovdeath.PetsOwnerSimulator.services.help.HelpService;
import com.sinovdeath.PetsOwnerSimulator.services.help.IHelpService;

public class HelpModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext _context;
    private IHelpService _helpService;

    public HelpModule(ReactApplicationContext context) {
        _context = context;
        _helpService = new HelpService();
    }

    @NonNull
    @Override
    public String getName() { return "Help"; }

    @ReactMethod
    public void getHelp(Promise promise) { promise.resolve(new Gson().toJson(_helpService.getHelp())); }
}
