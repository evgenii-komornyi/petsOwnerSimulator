package com.sinovdeath.PetsOwnerSimulator.entities.home.room;

import com.sinovdeath.PetsOwnerSimulator.entities.home.Image;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

public abstract class Room {
    protected String roomType;
    protected Image image;
    protected Item toy;
    protected Item litterBox;
    protected Item catHouse;
    protected Item sofa;
    public String getRoomType() { return roomType; }

    public void setRoomType(String roomType) { this.roomType = roomType; }

    public Image getImage() { return image; }

    public void setImage(Image image) { this.image = image; }

    public Item getToy() { return toy; }

    public void setToy(Item toy) { this.toy = toy; }

    public Item getLitterBox() { return litterBox; }

    public void setLitterBox(Item litterBox) { this.litterBox = litterBox; }

    public Item getCatHouse() { return catHouse; }

    public void setCatHouse(Item catHouse) { this.catHouse = catHouse; }

    public Item getSofa() { return sofa; }

    public void setSofa(Item sofa) { this.sofa = sofa; }
}
