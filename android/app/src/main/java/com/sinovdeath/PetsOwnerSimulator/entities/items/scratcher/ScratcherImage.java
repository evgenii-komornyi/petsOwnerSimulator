package com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher;

import com.sinovdeath.PetsOwnerSimulator.entities.items.Image;

import java.util.List;

public class ScratcherImage extends Image {
    private String currentImage;
    private String fullyDamagedImage;
    private List<String> damagedImages;

    public String getCurrentImage() { return currentImage; }
    public void setCurrentImage(String currentImage) { this.currentImage = currentImage; }

    public String getFullyDamagedImage() { return fullyDamagedImage; }
    public void setFullyDamagedImage(String fullyDamagedImage) { this.fullyDamagedImage = fullyDamagedImage; }

    public List<String> getDamagedImages() {
        return damagedImages;
    }
    public void setDamagedImages(List<String> damagedImages) {
        this.damagedImages = damagedImages;
    }
}
