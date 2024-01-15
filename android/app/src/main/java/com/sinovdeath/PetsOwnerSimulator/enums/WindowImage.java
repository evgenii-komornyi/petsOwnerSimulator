package com.sinovdeath.PetsOwnerSimulator.enums;

public enum WindowImage {
    OPENED_DAY("window_open-day"),
    CLOSED_DAY("window_closed-day"),
    OPENED_NIGHT("window_open-night"),
    CLOSED_NIGHT("window_closed-night");

    private String windowImage;

    WindowImage(String windowImage) {
        this.windowImage = windowImage;
    }

    public String getWindowImage() {
        return windowImage;
    }
}
