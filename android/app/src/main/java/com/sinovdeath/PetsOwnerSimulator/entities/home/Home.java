package com.sinovdeath.PetsOwnerSimulator.entities.home;

import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.home.LivingRoomGenerator;

import java.io.Serializable;

public class Home implements Serializable {
    private LivingRoom livingRoom;

    public Home() {
        this.livingRoom = LivingRoomGenerator.generateLivingRoom();
    }

    public LivingRoom getLivingRoom() { return livingRoom; }

    public void setLivingRoom(LivingRoom livingRoom) { this.livingRoom = livingRoom; }

    @Override
    public String toString() {
        return "Home{" +
                "livingRoom=" + livingRoom +
                '}';
    }
}
