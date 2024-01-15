package com.sinovdeath.PetsOwnerSimulator.entities.home.room;

public class Poop {
    private int poopOnCarpetCount;
    private String uri;

    public Poop() {}

    public int getPoopOnCarpetCount() {
        return poopOnCarpetCount;
    }
    public void setPoopOnCarpetCount(int poopOnCarpetCount) {
        this.poopOnCarpetCount = poopOnCarpetCount;
    }

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
                "poopOnCarpetCount=" + poopOnCarpetCount +
                ", uri='" + uri + '\'' +
                '}';
    }
}
