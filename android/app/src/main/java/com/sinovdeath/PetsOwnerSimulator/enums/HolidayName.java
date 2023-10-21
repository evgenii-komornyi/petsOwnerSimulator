package com.sinovdeath.PetsOwnerSimulator.enums;

public enum HolidayName {
    HALLOWEEN("halloween"), BIRTHDAY("birthday");

    private String holiday;

    HolidayName(String holidayName) {
        holiday = holidayName;
    }

    public String getHoliday() {
        return holiday;
    }
}
