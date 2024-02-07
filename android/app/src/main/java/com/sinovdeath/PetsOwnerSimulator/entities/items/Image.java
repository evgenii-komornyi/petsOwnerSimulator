package com.sinovdeath.PetsOwnerSimulator.entities.items;

public abstract class Image {
    protected String unused;
    protected String shopImage;
    protected String currentImage;

    public String getUnused() { return unused; }
    public void setUnused(String unused) { this.unused = unused; }

    public String getShopImage() { return shopImage; }
    public void setShopImage(String shopImage) { this.shopImage = shopImage; }

    public String getCurrentImage() { return currentImage; }
    public void setCurrentImage(String currentImage) { this.currentImage = currentImage; }
}
