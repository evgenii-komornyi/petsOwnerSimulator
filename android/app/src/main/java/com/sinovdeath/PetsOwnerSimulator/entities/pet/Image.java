package com.sinovdeath.PetsOwnerSimulator.entities.pet;

public class Image {
    private String regular;
    private String sad;
    private String  sleeping;
    private String blinking;
    private String dead;
    private RoomPet curledUp;
    private RoomPet sausage;

    public Image(String regular, String sad, String sleeping, String dead, String blinking) {
        this.regular = regular;
        this.sad = sad;
        this.sleeping = sleeping;
        this.blinking = blinking;
        this.dead = dead;
    }

    public String getRegular() { return regular; }
    public void setRegular(String regular) { this.regular = regular; }

    public String getSad() { return sad; }
    public void setSad(String sad) {
        this.sad = sad;
    }

    public String getSleeping() {
        return sleeping;
    }

    public void setSleeping(String sleeping) {
        this.sleeping = sleeping;
    }

    public String getBlinking() {
        return blinking;
    }

    public void setBlinking(String blinking) {
        this.blinking = blinking;
    }

    public String getDead() {
        return dead;
    }

    public void setDead(String dead) {
        this.dead = dead;
    }

    public RoomPet getCurledUp() {
        return curledUp;
    }

    public void setCurledUp(RoomPet curledUp) {
        this.curledUp = curledUp;
    }

    public RoomPet getSausage() {
        return sausage;
    }

    public void setSausage(RoomPet sausage) {
        this.sausage = sausage;
    }
}
