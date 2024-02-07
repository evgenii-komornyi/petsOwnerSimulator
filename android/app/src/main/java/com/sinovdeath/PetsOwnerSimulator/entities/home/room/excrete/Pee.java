package com.sinovdeath.PetsOwnerSimulator.entities.home.room.excrete;

public class Pee {
    private int peeOnFloorCount;
    private String uri;

    public int getPeeOnFloorCount() { return peeOnFloorCount; }
    public void setPeeOnFloorCount(int peeOnFloorCount) { this.peeOnFloorCount = peeOnFloorCount; }

    public String getUri() { return uri; }
    public void setUri(String uri) { this.uri = uri; }

    @Override
    public String toString() {
        return "Pee{" +
                "peeOnFloorCount=" + peeOnFloorCount +
                ", uri='" + uri + '\'' +
                '}';
    }
}
