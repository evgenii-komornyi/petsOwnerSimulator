package com.sinovdeath.PetsOwnerSimulator.Enums;

public enum WindowState {
    OPENED(true), CLOSED(false);

    private Boolean windowState;

    WindowState(Boolean state) {
        this.windowState = state;
    }

    public Boolean getWindowState() {
        return windowState;
    }
}
