package com.sinovdeath.PetsOwnerSimulator.entities.items.toy;

import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.enums.ToyType;

public class Toy extends Item {
    protected ToyImage image;
    protected String toyType;

    public ToyImage getImage() {
        return image;
    }
    public void setImage(ToyImage image) {
        this.image = image;
    }

    public String getToyType() {
        return toyType;
    }
    public void setToyType(ToyType toyType) {
        this.toyType = toyType.getToyType();
    }

    @Override
    public String toString() {
        return "Toy{" +
                ", image=" + image +
                ", toyType='" + toyType + '\'' +
                ", id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", forAnimal='" + forAnimal + '\'' +
                ", price=" + price +
                '}';
    }
}
