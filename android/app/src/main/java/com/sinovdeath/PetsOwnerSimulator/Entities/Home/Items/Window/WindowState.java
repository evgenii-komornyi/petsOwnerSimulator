package com.sinovdeath.PetsOwnerSimulator.Entities.Home.Items.Window;

public enum WindowState {
    OPENED(true), CLOSED(false);

    private Boolean value;

    private WindowState(Boolean value) {
        this.value = value;
    }

    public Boolean getValue() {
        return value;
    }
}
