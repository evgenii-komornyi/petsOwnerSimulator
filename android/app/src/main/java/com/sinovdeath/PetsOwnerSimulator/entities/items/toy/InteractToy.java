package com.sinovdeath.PetsOwnerSimulator.entities.items.toy;

import com.sinovdeath.PetsOwnerSimulator.entities.items.IScratchable;

public class InteractToy extends Toy implements IScratchable {
    private Integer durability;
    private Integer maxDurability;

    @Override
    public String toString() {
        return "InteractToy{" +
                "durability=" + durability +
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

    @Override
    public Integer getDurability() { return this.durability; }
    @Override
    public void setDurability(int durability) { this.durability = durability; }

    @Override
    public Integer getMaxDurability() { return maxDurability; }
    @Override
    public void setMaxDurability(int maxDurability) { this.maxDurability = maxDurability; }
}
