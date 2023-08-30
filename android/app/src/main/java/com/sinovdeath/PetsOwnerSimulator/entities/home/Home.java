package com.sinovdeath.PetsOwnerSimulator.entities.home;

import com.sinovdeath.PetsOwnerSimulator.enums.WindowState;

import java.util.Objects;

public class Home {
    private Integer poopOnCarpetCount;
    private Integer smell;
    private Boolean isWindowOpen;
    private Image image;

    public Home() {
        this.poopOnCarpetCount = 0;
        this.smell = 0;
        this.isWindowOpen = WindowState.CLOSED.getWindowState();
        this.image = new Image();
    }

    public Integer getPoopOnCarpetCount() {
        return poopOnCarpetCount;
    }

    public void setPoopOnCarpetCount(Integer poopOnCarpetCount) {
        this.poopOnCarpetCount = poopOnCarpetCount;
    }

    public Integer getSmell() {
        return smell;
    }

    public void setSmell(Integer smell) {
        this.smell = smell;
    }

    public Boolean getIsWindowOpen() {
        return isWindowOpen;
    }

    public void setIsWindowOpen(Boolean windowOpen) {
        isWindowOpen = windowOpen;
    }

    public Boolean checkIsWindowOpened() {
        return isWindowOpen;
    }

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Home home = (Home) o;
        return poopOnCarpetCount == home.poopOnCarpetCount && smell == home.smell && Objects.equals(isWindowOpen, home.isWindowOpen) && Objects.equals(image, home.image);
    }

    @Override
    public int hashCode() {
        return Objects.hash(poopOnCarpetCount, smell, isWindowOpen, image);
    }

    @Override
    public String toString() {
        return "Home{" +
                "poopOnCarpetCount=" + poopOnCarpetCount +
                ", smell=" + smell +
                ", isWindowOpen=" + isWindowOpen +
                ", image=" + image +
                '}';
    }
}
