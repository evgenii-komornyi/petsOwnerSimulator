package com.sinovdeath.PetsOwnerSimulator.enums;

public enum NotificationIcon {
    ALARM("baseline_info_24");

    private String icon;

    NotificationIcon(String icon) {
        this.icon = icon;
    }

    public String getIcon() {
        return icon;
    }
}
