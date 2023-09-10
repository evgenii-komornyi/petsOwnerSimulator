package com.sinovdeath.PetsOwnerSimulator.entities.items.toy;

import com.sinovdeath.PetsOwnerSimulator.entities.items.ICountable;

public class NonInteractToy extends Toy implements ICountable {
    private Integer count;

    @Override
    public Integer getCount() {
        return this.count;
    }

    @Override
    public void setCount(Integer count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "NonInteractToy{" +
                "count=" + count +
                ", durability=" + durability +
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
