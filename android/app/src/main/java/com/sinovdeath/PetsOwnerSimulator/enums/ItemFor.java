package com.sinovdeath.PetsOwnerSimulator.enums;

public enum ItemFor {
    CAT("cat"), DOG("dog"), FISH("fish");

    private String itemFor;

    ItemFor(String itemFor) {
        this.itemFor = itemFor;
    }

    public String getItemFor() {
        return itemFor;
    }
}
