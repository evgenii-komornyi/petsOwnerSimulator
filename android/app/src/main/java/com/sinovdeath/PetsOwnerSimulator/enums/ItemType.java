package com.sinovdeath.PetsOwnerSimulator.enums;

public enum ItemType {
    FOOD("Food"), TOYS("Toys"), LITTER_BOXES("Litter Boxes"), LITTER_BOX("litterBox"), CAT_HOUSE("catHouse"), FURNITURE("furniture"), SCRATCHERS("Scratchers"), FEEDERS("Feeders"), WATER_BOWL("waterBowl");

    private String itemType;

    ItemType(String itemType) {
        this.itemType = itemType;
    }

    public String getItemType() {
        return itemType;
    }
}
