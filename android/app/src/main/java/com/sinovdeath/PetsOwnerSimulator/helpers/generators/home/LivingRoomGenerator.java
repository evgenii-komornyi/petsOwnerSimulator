package com.sinovdeath.PetsOwnerSimulator.helpers.generators.home;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.home.Image;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;
import com.sinovdeath.PetsOwnerSimulator.entities.items.house.CatHouse;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.NonInteractToy;
import com.sinovdeath.PetsOwnerSimulator.enums.RoomType;
import com.sinovdeath.PetsOwnerSimulator.enums.WindowState;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

import java.util.ArrayList;

public class LivingRoomGenerator {
    public static LivingRoom generateLivingRoom() {
        LivingRoom livingRoom = new LivingRoom();

        livingRoom.setRoomType(RoomType.LIVING_ROOM.getRoomType());
        livingRoom.setPoopOnCarpetCount(0);
        livingRoom.setSmell(0);
        livingRoom.setIsWindowOpen(WindowState.CLOSED.getWindowState());
        Image livingRoomImage = new Image();
        livingRoomImage.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_ROOMS, Constants.DEFAULT_ROOM, Constants.IMAGE_EXT));
        livingRoom.setImage(livingRoomImage);
        livingRoom.setLitterBox(new LitterBox());
        livingRoom.setCatHouse(new CatHouse());
        livingRoom.setToy(new NonInteractToy());

        return livingRoom;
    }
}
