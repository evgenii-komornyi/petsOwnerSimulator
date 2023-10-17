package com.sinovdeath.PetsOwnerSimulator.entities.items.toy;

import com.sinovdeath.PetsOwnerSimulator.entities.items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.entities.items.IScratchable;

public class NonInteractToy extends Toy implements ICountable, IScratchable {
    private Integer count;
    private Integer durability;
    private Integer maxDurability;

    @Override
    public int getCount() {
        return this.count;
    }

    @Override
    public void setCount(int count) {
        this.count = count;
    }

    @Override
    public Integer getDurability() { return this.durability; }

    @Override
    public void setDurability(int durability) { this.durability = durability; }

    @Override
    public Integer getMaxDurability() { return maxDurability; }

    @Override
    public void setMaxDurability(int maxDurability) { this.maxDurability = maxDurability; }

    @Override
    public String toString() {
        return "NonInteractToy{" +
                "count=" + count +
                ", durability=" + durability +
                ", maxDurability=" + maxDurability +
                ", image=" + image +
                ", toyType='" + toyType + '\'' +
                ", id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", forAnimal='" + forAnimal + '\'' +
                ", price=" + price +
                ", stats=" + stats +
                '}';
    }
}
