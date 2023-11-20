package com.sinovdeath.PetsOwnerSimulator.services.alarm;

public interface IAlarmService {
    void setAlarm(int id, int hour, int minute);
    void cancelAlarm(int id);
}
