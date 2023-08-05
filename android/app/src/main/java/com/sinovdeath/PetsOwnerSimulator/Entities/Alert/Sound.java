package com.sinovdeath.PetsOwnerSimulator.Entities.Alert;

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
