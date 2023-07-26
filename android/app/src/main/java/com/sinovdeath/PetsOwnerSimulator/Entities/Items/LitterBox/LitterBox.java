package com.sinovdeath.PetsOwnerSimulator.Entities.Items.LitterBox;

import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;

public class LitterBox extends Item {
    private Integer slots;
    private LitterBoxImage image;

    public Integer getSlots() {
        return slots;
    }

    public void setSlots(Integer slots) {
        this.slots = slots;
    }

    public LitterBoxImage getImage() {
        return image;
    }

    public void setImage(LitterBoxImage image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "LitterBox{" +
                "slots=" + slots +
                ", image=" + image +
                ", id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", price=" + price +
                '}';
    }
}
