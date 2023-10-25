package com.sinovdeath.PetsOwnerSimulator.entities.pet;

public class Image {
    private String regular;
    private String sad;
    private String  sleeping;
    private String blinking;
    private String dead;

    public Image(String regular, String sad, String sleeping, String dead, String blinking) {
        this.regular = regular;
        this.sad = sad;
        this.sleeping = sleeping;
        this.blinking = blinking;
        this.dead = dead;
    }

    public void setRegular(String regular) {
        this.regular = regular;
    }

    public void setSad(String sad) {
        this.sad = sad;
    }

    public void setSleeping(String sleeping) {
        this.sleeping = sleeping;
    }

    public void setBlinking(String blinking) {
        this.blinking = blinking;
    }

    public void setDead(String dead) {
        this.dead = dead;
    }
}
