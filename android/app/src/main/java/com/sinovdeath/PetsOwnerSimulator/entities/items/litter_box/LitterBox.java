package com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box;

import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

public class LitterBox extends Item {
    private Integer slots;
    private LitterBoxImage image;
    private Integer maxSlots;

    public Integer getSlots() {
        return slots;
    }

    public void setSlots(Integer slots) {
        this.slots = slots;
    }

    public Integer getMaxSlots() {
        return maxSlots;
    }

    public void setMaxSlots(Integer maxSlots) {
        this.maxSlots = maxSlots;
    }

    public Boolean getPetPoop() {
        if (slots <= 0) {
            return false;
        } else {
            slots--;

            return true;
        }
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
