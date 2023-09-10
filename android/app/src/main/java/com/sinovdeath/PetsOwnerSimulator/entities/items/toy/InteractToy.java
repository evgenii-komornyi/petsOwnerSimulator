package com.sinovdeath.PetsOwnerSimulator.entities.items.toy;

public class InteractToy extends Toy {
    @Override
    public String toString() {
        return "InteractToy{" +
                "durability=" + durability +
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
