package com.sinovdeath.PetsOwnerSimulator.modules;

import android.os.Build;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Packager implements ReactPackage {

    @RequiresApi(api = Build.VERSION_CODES.N)
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactApplicationContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new OwnerModule(reactApplicationContext));
        modules.add(new GameModule(reactApplicationContext));
        modules.add(new ShelterModule(reactApplicationContext));
        modules.add(new ShopModule(reactApplicationContext));
        modules.add(new PetsModule(reactApplicationContext));
        modules.add(new HomeModule(reactApplicationContext));
        modules.add(new HolidayModule(reactApplicationContext));
        modules.add(new SettingsModule(reactApplicationContext));
        modules.add(new HelpModule(reactApplicationContext));

        return modules;
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactApplicationContext) {
        return Collections.emptyList();
    }
}
