package com.sinovdeath.PetsOwnerSimulator.entities.holidays;

import java.util.Date;
import java.util.List;

public class Holiday {
    private String holiday;
    private List<Date> dates;
    private List<HolidayImage> images;
    private int priority;

    public String getHoliday() {
        return holiday;
    }
    public void setHoliday(String holiday) {
        this.holiday = holiday;
    }

    public List<Date> getDates() {
        return dates;
    }
    public void setDates(List<Date> dates) {
        this.dates = dates;
    }

    public List<HolidayImage> getImages() {
        return images;
    }
    public void setImages(List<HolidayImage> images) {
        this.images = images;
    }

    public int getPriority() { return priority; }
    public void setPriority(int priority) { this.priority = priority; }

    @Override
    public String toString() {
        return "Holiday{" +
                "holiday='" + holiday + '\'' +
                ", dates=" + dates +
                ", images=" + images +
                ", priority=" + priority +
                '}';
    }
}
