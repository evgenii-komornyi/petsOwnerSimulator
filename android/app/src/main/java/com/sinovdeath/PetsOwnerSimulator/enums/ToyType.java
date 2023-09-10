package com.sinovdeath.PetsOwnerSimulator.enums;

public enum ToyType {
    INTERACT("interact"), NON_INTERACT("nonInteract");
    private String toyType;

    ToyType(String toyType) {
        this.toyType = toyType;
    }

    public String getToyType() {
        return toyType;
    }
}
