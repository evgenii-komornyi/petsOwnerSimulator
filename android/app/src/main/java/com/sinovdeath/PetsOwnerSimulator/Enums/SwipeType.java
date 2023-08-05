package com.sinovdeath.PetsOwnerSimulator.Enums;

public enum SwipeType {
    UP("SWIPE_UP"), DOWN("SWIPE_DOWN"), LEFT("SWIPE_LEFT"), RIGHT("SWIPE_RIGHT"), DIAGONAL("SWIPE_DIAGONAL");

    private String swipe;

    SwipeType(String swipeDirection) {
        swipe = swipeDirection;
    }

    public String getSwipeDirection() {
        return swipe;
    }
}
