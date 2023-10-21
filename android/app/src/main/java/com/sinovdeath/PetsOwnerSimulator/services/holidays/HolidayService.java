package com.sinovdeath.PetsOwnerSimulator.services.holidays;

import android.os.Build;

import androidx.annotation.RequiresApi;

import com.google.android.exoplayer2.util.Log;
import com.sinovdeath.PetsOwnerSimulator.entities.holidays.Holiday;
import com.sinovdeath.PetsOwnerSimulator.entities.holidays.HolidayImage;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.holidays.HolidaysGenerator;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class HolidayService implements IHolidayService {
    private List<Holiday> holidays;

    public HolidayService() {
        this.holidays = HolidaysGenerator.generateHolidays();
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public String checkHoliday() {
        Calendar todayCalendar = Calendar.getInstance();
        int currentDay = todayCalendar.get(Calendar.DAY_OF_MONTH);
        int currentMonth = todayCalendar.get(Calendar.MONTH);
        Holiday currentHoliday = null;

        for (Holiday holiday : holidays) {
            if (_isTodayHoliday(holiday.getDates(), currentDay, currentMonth)) {
                currentHoliday = holiday;
                break;
            }
        }

        return Generator.generateJson(currentHoliday);
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    private boolean _isTodayHoliday(List<Date> dates, int currentDay, int currentMonth) {
        return dates.stream().anyMatch(date -> {
            Calendar holidayCalendar = Calendar.getInstance();
            holidayCalendar.setTime(date);

            int holidayDay = holidayCalendar.get(Calendar.DAY_OF_MONTH);
            int holidayMonth = holidayCalendar.get(Calendar.MONTH);

            return currentDay == holidayDay && currentMonth == holidayMonth;
        });
    }
}
