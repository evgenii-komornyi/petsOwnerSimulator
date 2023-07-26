package com.sinovdeath.PetsOwnerSimulator.Entities.Home;

import com.sinovdeath.PetsOwnerSimulator.Entities.Home.Items.Carpet.Carpet;
import com.sinovdeath.PetsOwnerSimulator.Entities.Home.Items.Window.Window;

public class Home {
    private Integer impurity;
    private Integer smell;
    private Boolean isWindowOpen;
    private Carpet carpet;
    private Window window;

    public Home() {
        this.impurity = 0;
        this.smell = 0;
        this.window = new Window();
        this.carpet = new Carpet();
    }

    @Override
    public String toString() {
        return "Home{" +
                "impurity=" + impurity +
                ", smell=" + smell +
                '}';
    }

    public Integer getImpurity() {
        return impurity;
    }

    public void setImpurity(Integer impurity) {
        this.impurity = impurity;
    }

    public Integer getSmell() {
        return smell;
    }

    public void setSmell(Integer smell) {
        this.smell = smell;
    }
}
