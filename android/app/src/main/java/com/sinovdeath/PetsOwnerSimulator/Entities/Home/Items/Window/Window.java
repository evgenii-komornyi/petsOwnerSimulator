package com.sinovdeath.PetsOwnerSimulator.Entities.Home.Items.Window;

public class Window {
    private Boolean windowState;

    public Window() {
        this.windowState = WindowState.CLOSED.getValue();
    }

    public Boolean getWindowState() {
        return windowState;
    }

    public void setWindowState(Boolean windowState) {
        this.windowState = windowState;
    }
}
