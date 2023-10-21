package com.sinovdeath.PetsOwnerSimulator.modules;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.sinovdeath.PetsOwnerSimulator.services.holidays.HolidayService;
import com.sinovdeath.PetsOwnerSimulator.services.holidays.IHolidayService;

public class HolidayModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext _context;
    private static IHolidayService _holidayService;

    public HolidayModule(ReactApplicationContext _context) {
        this._context = _context;
        this._holidayService = new HolidayService();
    }

    @NonNull
    @Override
    public String getName() {
        return "Holiday";
    }

    @ReactMethod
    public void checkHoliday(Promise promise) { promise.resolve(_holidayService.checkHoliday()); }
}
