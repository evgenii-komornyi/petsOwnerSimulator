package com.sinovdeath.PetsOwnerSimulator.entities.settings;

import java.util.ArrayList;
import java.util.List;

public class Settings {
    private Notification feedingNotification;

    private List<Alarm> alarms;

    public Settings() {
        alarms = new ArrayList<>();
    }

    public List<Alarm> getAlarms() { return alarms; }
    public void setAlarms(List<Alarm> alarms) { this.alarms = alarms; }

    public Notification getFeedingNotification() { return feedingNotification; }
    public void setFeedingNotification(Notification feedingNotification) { this.feedingNotification = feedingNotification; }
}
