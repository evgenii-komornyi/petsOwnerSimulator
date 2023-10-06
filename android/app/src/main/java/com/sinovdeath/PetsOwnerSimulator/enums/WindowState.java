package com.sinovdeath.PetsOwnerSimulator.enums;

public enum WindowState {
    OPENED(true), CLOSED(false);

    private boolean windowState;

    WindowState(boolean state) {
        this.windowState = state;
    }

    public boolean getWindowState() {
        return windowState;
    }
}
