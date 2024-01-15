package com.sinovdeath.PetsOwnerSimulator.entities.home.room;

public class Window {
    private String currentWindowImage;
    private boolean isWindowOpen;

    public Window() {}

    public void setCurrentWindowImage(String currentWindowImage) { this.currentWindowImage = currentWindowImage; }

    public void setIsWindowOpen(boolean windowOpen) { isWindowOpen = windowOpen; }
    public boolean checkIsWindowOpened() { return this.isWindowOpen; }

    @Override
    public String toString() {
        return "Window{" +
                "currentWindowImage='" + currentWindowImage + '\'' +
                ", isWindowOpen=" + isWindowOpen +
                '}';
    }
}
