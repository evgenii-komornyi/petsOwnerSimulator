package com.sinovdeath.PetsOwnerSimulator.entities.home.room;

import com.sinovdeath.PetsOwnerSimulator.entities.home.padding.Padding;

public abstract class Room {
    protected Padding roomPadding;

    public Padding getRoomPadding() {
        return roomPadding;
    }

    public void setRoomPadding(Padding roomPadding) {
        this.roomPadding = roomPadding;
    }
}
