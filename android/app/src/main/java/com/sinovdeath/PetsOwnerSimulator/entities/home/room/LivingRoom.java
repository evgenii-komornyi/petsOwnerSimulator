package com.sinovdeath.PetsOwnerSimulator.entities.home.room;

import com.sinovdeath.PetsOwnerSimulator.entities.home.room.excrete.Excrete;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.excrete.Poop;

import java.io.Serializable;

public class LivingRoom extends Room implements Serializable {
    private Excrete excrete;
    private Smell smell;
    private Window window;
    private Carpet carpet;

    public Excrete getExcrete() { return excrete; }
    public void setExcrete(Excrete excrete) { this.excrete = excrete; }

    public Smell getSmell() { return smell; }
    public void setSmell(Smell smell) { this.smell = smell; }

    public void setWindow(Window window) { this.window = window; }
    public Window getWindow() { return window; }

    public void setCarpet(Carpet carpet) { this.carpet = carpet; }
    public Carpet getCarpet() { return carpet; }

    @Override
    public String toString() {
        return "LivingRoom{" +
                "excrete=" + excrete +
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
