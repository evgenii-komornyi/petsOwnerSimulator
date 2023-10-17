package com.sinovdeath.PetsOwnerSimulator.enums;

public enum ItemType {
    FOOD("Food"), TOYS("Toys"), LITTER_BOXES("Litter Boxes"), HOUSES("Houses"), LITTER_BOX("litterBox"), CAT_HOUSE("catHouse"), FURNITURE("furniture"), DOG_HOUSE("dogHouse"), SCRATCHERS("Scratchers");

    private String itemType;

    ItemType(String itemType) {
        this.itemType = itemType;
    }

    public String getItemType() {
        return itemType;
    }
}
