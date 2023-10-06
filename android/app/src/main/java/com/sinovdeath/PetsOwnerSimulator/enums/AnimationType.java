package com.sinovdeath.PetsOwnerSimulator.enums;

public enum AnimationType {
    LICK("lick");

    private String animation;

    AnimationType(String animationType) {
        animation = animationType;
    }

    public String getAnimationType() {
        return animation;
    }
}
