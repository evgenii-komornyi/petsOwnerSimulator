package com.sinovdeath.PetsOwnerSimulator.enums;

public enum HelpTags {
    STATS("stats");

    private String tag;

    HelpTags(String tag) {
        this.tag = tag;
    }

    public String getTag() {
        return tag;
    }
}
