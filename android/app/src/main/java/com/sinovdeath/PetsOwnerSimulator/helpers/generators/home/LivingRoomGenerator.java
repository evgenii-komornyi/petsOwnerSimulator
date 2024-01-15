package com.sinovdeath.PetsOwnerSimulator.helpers.generators.home;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.home.Image;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Carpet;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Poop;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Smell;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Window;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher.CatHouse;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher.ScratcherImage;
import com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher.Sofa;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.NonInteractToy;
import com.sinovdeath.PetsOwnerSimulator.enums.*;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

public class LivingRoomGenerator {
    public static LivingRoom generateLivingRoom() {
        LivingRoom livingRoom = new LivingRoom();

        livingRoom.setRoomType(RoomType.LIVING_ROOM.getRoomType());
        Poop poop = new Poop();
        poop.setPoopOnCarpetCount(0);
        poop.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_POOPS_FOLDER, RoomItemType.POOP.getRoomItemType(), Constants.IMAGE_EXT));
        livingRoom.setPoop(poop);
        Smell smell = new Smell();
        smell.setSmell(0);
        smell.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_SMELLS_FOLDER, RoomItemType.POOP_SMELL.getRoomItemType(), Constants.IMAGE_EXT));
        livingRoom.setSmell(smell);
        Window window = new Window();
        window.setIsWindowOpen(false);
        window.setCurrentWindowImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_WINDOWS_FOLDER, WindowImage.CLOSED_DAY.getWindowImage(), Constants.IMAGE_EXT));
        livingRoom.setWindow(window);
        Carpet carpet = new Carpet();
        carpet.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_CARPETS_FOLDER, RoomItemType.DEFAULT_CARPET.getRoomItemType(), Constants.IMAGE_EXT));
        livingRoom.setCarpet(carpet);
        Image livingRoomImage = new Image();
        livingRoomImage.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_ROOMS, Constants.DEFAULT_ROOM, Constants.IMAGE_EXT));
        livingRoom.setImage(livingRoomImage);
        livingRoom.setLitterBox(new LitterBox());
        livingRoom.setCatHouse(new CatHouse());
        livingRoom.setToy(new NonInteractToy());
        livingRoom.setSofa(_generateSofa());

        return livingRoom;
    }

    private static Item _generateSofa() {
        Sofa sofa_400 = new Sofa();
        sofa_400.setId("sofa-400");
        sofa_400.setName("SOFA-400");
        sofa_400.setDurability(400);
        sofa_400.setType(ItemType.FURNITURE.getItemType());
        ScratcherImage sofa_400Image = new ScratcherImage();
        sofa_400Image.setUnused(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_SCRATCHERS_FOLDER, sofa_400.getId(), UriType.UNUSED.getUriValue(), Constants.IMAGE_EXT));
        sofa_400.setImage(sofa_400Image);

        return sofa_400;
    }
}
