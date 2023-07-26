package com.sinovdeath.PetsOwnerSimulator.Entities.Pet;

public class Image {
    private String regular;
    private String sad;
    private String  sleeping;
    private String dead;

    public Image(String regular, String sad, String sleeping, String dead) {
        this.regular = regular;
        this.sad = sad;
        this.sleeping = sleeping;
        this.dead = dead;
    }

    public String getRegular() {
        return regular;
    }

    public String getSad() {
        return sad;
    }

    public String getSleeping() {
        return sleeping;
    }

    public String getDead() {
        return dead;
    }
}
