package com.sinovdeath.PetsOwnerSimulator.entities.home.room;

public class Smell {
    private int smell;
    private String uri;

    public Smell() {}

    public int getSmell() {
        return smell;
    }
    public void setSmell(int smell) {
        this.smell = smell;
    }

    public String getUri() {
        return uri;
    }
    public void setUri(String uri) {
        this.uri = uri;
    }

    @Override
    public String toString() {
        return "Smell{" +
                "smell=" + smell +
                ", uri='" + uri + '\'' +
                '}';
    }
}
