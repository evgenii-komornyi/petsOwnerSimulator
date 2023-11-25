package com.sinovdeath.PetsOwnerSimulator.modules;

import android.content.Context;
import android.os.Build;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.sinovdeath.PetsOwnerSimulator.services.alarm.AlarmService;
import com.sinovdeath.PetsOwnerSimulator.services.alarm.IAlarmService;

public class SettingsModule extends ReactContextBaseJavaModule {
    private final Context _context;
    IAlarmService _alarmService;
    public SettingsModule(@Nullable Context context) {
        _context = context;
        _alarmService = new AlarmService(context);
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
