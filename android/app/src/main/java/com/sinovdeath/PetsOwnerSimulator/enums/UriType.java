package com.sinovdeath.PetsOwnerSimulator.enums;

public enum UriType {
    SAD("sad"),
    SLEEPING("sleeping"),
    BLINKING("blinking"),
    CURLED_UP("curled_up"),
    SAUSAGE("kolbasen"),
    SHORT_HAIR("short_hair"),
    LONG_HAIR("long_hair"),
    FOLDED_EARS("folded_ears"),
    UNUSED("unused"),
    USED("used"),
    EMPTY("empty"),
    FULL("full");

    private final String uriValue;

    UriType(String stringValue) {
        this.uriValue = stringValue;
    }

    public String getUriValue() {
        return uriValue;
    }
}
