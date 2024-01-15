package com.sinovdeath.PetsOwnerSimulator.services.migrator;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.home.Home;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Carpet;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Poop;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Smell;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Window;
import com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher.Sofa;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.RoomPet;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Alarm;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Notification;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Settings;
import com.sinovdeath.PetsOwnerSimulator.enums.RoomItemType;
import com.sinovdeath.PetsOwnerSimulator.enums.UriType;
import com.sinovdeath.PetsOwnerSimulator.enums.WindowImage;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Migrator implements IMigrator {
    @Override
    public Owner migrateOwnerByVersion(Owner currentOwner) {
        String version = currentOwner.getVersion();

        if (version == null || version.isEmpty()) {
            currentOwner.setVersion("1.0");
            List<HashMap<String, Animal>> pets = currentOwner.getPets();
            if (!pets.isEmpty()) {
                for (HashMap<String, Animal> petMap : pets) {
                    for (Animal pet : petMap.values()) {
                        pet.getMaxValues().setHealth(1500);
                        pet.getImg().setBlinking(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_CATS_FOLDER, pet.getName().toLowerCase(), UriType.BLINKING.getUriValue(), Constants.IMAGE_EXT));
                    }
                }
            }
        }

        if (version.equals("1.0")) {
            currentOwner.setVersion("1.1");
            Settings settings = new Settings();
            List<Alarm> alarms = new ArrayList<>();

            Notification feedNotification = new Notification();
            feedNotification.setTitle(Constants.NOTIFICATION_TITLE);
            feedNotification.setBody(Constants.NOTIFICATION_BODY);
            settings.setFeedingNotification(feedNotification);

            Alarm firstFeedAlarm = new Alarm();
            firstFeedAlarm.setId(0);
            firstFeedAlarm.setHour(10);
            firstFeedAlarm.setMinutes(0);
            firstFeedAlarm.setAlarmActive(false);

            Alarm secondFeedAlarm = new Alarm();
            secondFeedAlarm.setId(1);
            secondFeedAlarm.setHour(20);
            secondFeedAlarm.setMinutes(0);
            secondFeedAlarm.setAlarmActive(false);

            alarms.add(firstFeedAlarm);
            alarms.add(secondFeedAlarm);

            settings.setAlarms(alarms);
            currentOwner.setSettings(settings);
        }

        if (version.equals("1.1")) {
            currentOwner.setVersion("1.2");
            List<HashMap<String, Animal>> pets = currentOwner.getPets();
            if (!pets.isEmpty()) {
                for (HashMap<String, Animal> petMap : pets) {
                    for (Animal pet : petMap.values()) {
                        pet.getImg().setCurledUp(new RoomPet(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_CATS_FOLDER, pet.getName().toLowerCase(), UriType.CURLED_UP.getUriValue(), Constants.IMAGE_EXT)));
                        pet.getImg().setSausage(new RoomPet(Generator.generatePathToFile(Constants.LONG_PATH_FORMAT, Constants.ASSETS_CATS_FOLDER, pet.getName().toLowerCase(), UriType.SAUSAGE.getUriValue(), Constants.IMAGE_EXT)));
                    }
                }
            }

            Home home = currentOwner.getHome();
            LivingRoom livingRoom = home.getLivingRoom();
            livingRoom.setCarpet(new Carpet());
            livingRoom.setWindow(livingRoom.getWindow());
            livingRoom.setPoop(livingRoom.getPoop());
            livingRoom.setSmell(livingRoom.getSmell());
            home.setLivingRoom(livingRoom);
            currentOwner.setHome(home);
        }

        if (version.equals("1.2")) {
            currentOwner.setVersion("1.3");
            LivingRoom livingRoom = currentOwner.getHome().getLivingRoom();
            Smell smell = livingRoom.getSmell();
            smell.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_SMELLS_FOLDER, RoomItemType.POOP_SMELL.getRoomItemType(), Constants.IMAGE_EXT));
            Carpet carpet = livingRoom.getCarpet();
            carpet.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_CARPETS_FOLDER, RoomItemType.DEFAULT_CARPET.getRoomItemType(), Constants.IMAGE_EXT));
            Poop poop = livingRoom.getPoop();
            poop.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_POOPS_FOLDER, RoomItemType.POOP.getRoomItemType(), Constants.IMAGE_EXT));
            Window window = livingRoom.getWindow();
            window.setCurrentWindowImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_WINDOWS_FOLDER, WindowImage.CLOSED_DAY.getWindowImage(), Constants.IMAGE_EXT));

            livingRoom.setSmell(smell);
            livingRoom.setPoop(poop);
            livingRoom.setCarpet(carpet);
            livingRoom.setWindow(window);
        }

        if (version.equals("1.3")) {
            currentOwner.setVersion("1.4");
            LivingRoom livingRoom = currentOwner.getHome().getLivingRoom();
            Smell smell = livingRoom.getSmell();
            smell.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_SMELLS_FOLDER, RoomItemType.POOP_SMELL.getRoomItemType(), Constants.IMAGE_EXT));
            Carpet carpet = livingRoom.getCarpet();
            carpet.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_CARPETS_FOLDER, RoomItemType.DEFAULT_CARPET.getRoomItemType(), Constants.IMAGE_EXT));
            Poop poop = livingRoom.getPoop();
            poop.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_POOPS_FOLDER, RoomItemType.POOP.getRoomItemType(), Constants.IMAGE_EXT));
            Window window = livingRoom.getWindow();
            window.setCurrentWindowImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_WINDOWS_FOLDER, WindowImage.CLOSED_DAY.getWindowImage(), Constants.IMAGE_EXT));

            livingRoom.setSmell(smell);
            livingRoom.setPoop(poop);
            livingRoom.setCarpet(carpet);
            livingRoom.setWindow(window);
        }

        return currentOwner;
    }
}
