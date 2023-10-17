package com.sinovdeath.PetsOwnerSimulator.entities.items;

public interface IScratchable {
    Integer getDurability();
    void setDurability(int durability);

    Integer getMaxDurability();
    void setMaxDurability(int maxDurability);
}
