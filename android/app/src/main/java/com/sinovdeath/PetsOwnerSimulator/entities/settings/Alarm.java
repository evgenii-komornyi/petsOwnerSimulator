package com.sinovdeath.PetsOwnerSimulator.entities.settings;

public class Alarm {
    private int id;
    private int hour;
    private int minutes;
    private boolean isAlarmActive;

    public Alarm() {}

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getHour() { return hour; }
    public void setHour(int hour) { this.hour = hour; }

    public int getMinutes() { return minutes; }
    public void setMinutes(int minutes) { this.minutes = minutes; }

    public boolean isAlarmActive() { return isAlarmActive; }
    public void setAlarmActive(boolean alarmActive) { isAlarmActive = alarmActive; }

    @Override
    public String toString() {
        return "Alarm{" +
                "id=" + id +
                ", hour=" + hour +
                ", minutes=" + minutes +
                ", isAlarmActive=" + isAlarmActive +
                '}';
    }
}
