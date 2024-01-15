package com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher;

import com.sinovdeath.PetsOwnerSimulator.entities.items.IScratchable;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

public abstract class Scratcher extends Item implements IScratchable {

    protected Integer maxDurability;
    protected Integer durability;
    protected ScratcherImage image;

    @Override
    public Integer getDurability() { return durability; }
    @Override
    public void setDurability(int durability) { this.durability = durability; }

    @Override
    public Integer getMaxDurability() { return maxDurability; }
    @Override
    public void setMaxDurability(int maxDurability) { this.maxDurability = maxDurability; }

    public ScratcherImage getImage() {
        return image;
    }
    public void setImage(ScratcherImage image) {
        this.image = image;
    }
}
