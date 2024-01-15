package com.sinovdeath.PetsOwnerSimulator.entities.home.room;

import java.io.Serializable;

public class LivingRoom extends Room implements Serializable {
    private Poop poop;
    private Smell smell;
    private Window window;
    private Carpet carpet;

    public Poop getPoop() { return poop; }
    public void setPoop(Poop poop) { this.poop = poop; }

    public Smell getSmell() { return smell; }
    public void setSmell(Smell smell) { this.smell = smell; }

    public void setWindow(Window window) { this.window = window; }
    public Window getWindow() { return window; }

    public void setCarpet(Carpet carpet) { this.carpet = carpet; }

    public Carpet getCarpet() { return carpet; }

    @Override
    public String toString() {
        return "LivingRoom{" +
                "poop=" + poop +
                ", smell=" + smell +
                ", window=" + window +
                ", carpet=" + carpet +
                ", roomType='" + roomType + '\'' +
                ", image=" + image +
                ", toy=" + toy +
                ", litterBox=" + litterBox +
                ", catHouse=" + catHouse +
                ", sofa=" + sofa +
                '}';
    }
}
