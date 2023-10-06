package com.sinovdeath.PetsOwnerSimulator.enums;

public enum RoomType {
    LIVING_ROOM("livingRoom");

    private String roomType;

    private RoomType(String roomType) {
        this.roomType = roomType;
    }

    public String getRoomType() {
        return this.roomType;
    }
}
