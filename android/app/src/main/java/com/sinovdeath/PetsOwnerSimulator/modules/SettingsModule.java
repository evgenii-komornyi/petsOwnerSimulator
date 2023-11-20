package com.sinovdeath.PetsOwnerSimulator.modules;

import android.os.Build;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.sinovdeath.PetsOwnerSimulator.services.alarm.AlarmService;
import com.sinovdeath.PetsOwnerSimulator.services.alarm.IAlarmService;

public class SettingsModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext _reactContext;
    IAlarmService _alarmService;
    public SettingsModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
        _reactContext = reactContext;
        _alarmService = new AlarmService(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "Settings";
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    public void setAlarm(ReadableMap params, Promise promise) {
        _alarmService.setAlarm(params.getInt("id"), params.getInt("hours"), params.getInt("minutes"));
        promise.resolve("Your alarm was activated successfully!");
    }

    @ReactMethod
    public void cancelAlarm(ReadableMap params, Promise promise) {
        _alarmService.cancelAlarm(params.getInt("id"));
        promise.resolve("Your alarm was deactivated successfully!");
    }
}
