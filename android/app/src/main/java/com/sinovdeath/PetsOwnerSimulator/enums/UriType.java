package com.sinovdeath.PetsOwnerSimulator.enums;

public enum UriType {
    BLINKING("blinking"),
    CURLED_UP("curled_up"),
    DEHYDRATED("dehydrated"),
    EMPTY("empty"),
    FOLDED_EARS("folded_ears"),
    FULL("full"),
    LONG_HAIR("long_hair"),
    SAD("sad"),
    SAUSAGE("kolbasen"),
    SHOP("shop"),
    SHORT_HAIR("short_hair"),
    SLEEPING("sleeping"),
    UNUSED("unused"),
    USED("used");

    private final String uriValue;

    UriType(String stringValue) {
        this.uriValue = stringValue;
    }

    public String getUriValue() {
        return uriValue;
    }
}
