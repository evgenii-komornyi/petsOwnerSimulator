package com.sinovdeath.PetsOwnerSimulator.entities.home.room.excrete;

public class Poop {
    private int poopOnFloorCount;
    private String uri;

    public Poop() {}

    public int getPoopOnFloorCount() {
        return poopOnFloorCount;
    }
    public void setPoopOnFloorCount(int poopOnFloorCount) { this.poopOnFloorCount = poopOnFloorCount; }

    public String getUri() {
        return uri;
    }
    public void setUri(String uri) {
        this.uri = uri;
    }

    @Override
    public String
    toString() {
        return "Poop{" +
                "poopOnFloorCount=" + poopOnFloorCount +
                ", uri='" + uri + '\'' +
                '}';
    }
}
