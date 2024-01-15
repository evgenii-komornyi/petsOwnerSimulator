package com.sinovdeath.PetsOwnerSimulator.entities.items;

import com.sinovdeath.PetsOwnerSimulator.entities.stats.Stats;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemFor;

import java.math.BigDecimal;

public abstract class Item {
    protected String id;
    protected String name;
    protected String type;
    protected String forAnimal;
    protected BigDecimal price;
    protected Stats stats;

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

    public BigDecimal getPrice() {
        return price;
    }
    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getForAnimal() {
        return forAnimal;
    }
    public void setForAnimal(ItemFor forAnimal) {
        this.forAnimal = forAnimal.getItemFor();
    }

    public Stats getStats() { return stats; }
    public void setStats(Stats stats) { this.stats = stats; }
}
