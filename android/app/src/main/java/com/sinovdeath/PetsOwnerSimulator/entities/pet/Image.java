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
}
