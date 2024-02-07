package com.sinovdeath.PetsOwnerSimulator.enums;

public enum RoomItemType {
    DEFAULT_CARPET("seal"), POOP("normal_poop"), PEE("pee"), POOP_SMELL("poop_smell");

    private String roomItemType;

    RoomItemType(String roomItemType) {
        this.roomItemType = roomItemType;
    }

    public String getRoomItemType() {
        return roomItemType;
    }
}
