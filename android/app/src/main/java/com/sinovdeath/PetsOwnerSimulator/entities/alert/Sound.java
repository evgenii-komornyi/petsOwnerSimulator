package com.sinovdeath.PetsOwnerSimulator.entities.alert;

public class Sound {
    private String fileName;
    private int priority;

    public Sound(String fileName, int priority) {
        this.fileName = fileName;
        this.priority = priority;
    }

    public int getPriority() {
        return priority;
    }
}
