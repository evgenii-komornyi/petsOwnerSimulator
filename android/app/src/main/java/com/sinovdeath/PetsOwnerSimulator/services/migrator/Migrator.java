package com.sinovdeath.PetsOwnerSimulator.services.migrator;

import android.os.Build;

import androidx.annotation.RequiresApi;

import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.home.Home;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Carpet;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.excrete.Excrete;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.excrete.Pee;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.excrete.Poop;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Smell;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Window;
import com.sinovdeath.PetsOwnerSimulator.entities.items.food.Food;
import com.sinovdeath.PetsOwnerSimulator.entities.items.food.FoodImage;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.Toy;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.ToyImage;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Inventory;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.RoomPet;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Alarm;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Notification;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Settings;
import com.sinovdeath.PetsOwnerSimulator.entities.stats.MoodStats;
import com.sinovdeath.PetsOwnerSimulator.entities.stats.Stats;
import com.sinovdeath.PetsOwnerSimulator.entities.stats.StatsIncreasing;
import com.sinovdeath.PetsOwnerSimulator.enums.RoomItemType;
import com.sinovdeath.PetsOwnerSimulator.enums.UriType;
import com.sinovdeath.PetsOwnerSimulator.enums.WindowImage;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.managers.ImageManager;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Migrator implements IMigrator {
    @RequiresApi(api = Build.VERSION_CODES.N)
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

        version = currentOwner.getVersion();

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

        version = currentOwner.getVersion();

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
            Excrete excrete = livingRoom.getExcrete();
            excrete.setPoop(livingRoom.getExcrete().getPoop());
            livingRoom.setExcrete(excrete);
            livingRoom.setSmell(livingRoom.getSmell());
            home.setLivingRoom(livingRoom);
            currentOwner.setHome(home);
        }

        version = currentOwner.getVersion();

        if (version.equals("1.2")) {
            currentOwner.setVersion("1.3");
            LivingRoom livingRoom = currentOwner.getHome().getLivingRoom();
            Smell smell = new Smell();
            smell.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_SMELLS_FOLDER, RoomItemType.POOP_SMELL.getRoomItemType(), Constants.IMAGE_EXT));
            Carpet carpet = livingRoom.getCarpet();
            carpet.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_CARPETS_FOLDER, RoomItemType.DEFAULT_CARPET.getRoomItemType(), Constants.IMAGE_EXT));
            Excrete excrete = new Excrete();
            Poop poop = new Poop();
            poop.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_EXCRETE_FOLDER, RoomItemType.POOP.getRoomItemType(), Constants.IMAGE_EXT));
            excrete.setPoop(poop);
            Window window = new Window();
            window.setCurrentWindowImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_WINDOWS_FOLDER, WindowImage.CLOSED_DAY.getWindowImage(), Constants.IMAGE_EXT));

            livingRoom.setSmell(smell);
            livingRoom.setExcrete(excrete);
            livingRoom.setCarpet(carpet);
            livingRoom.setWindow(window);
        }

        version = currentOwner.getVersion();

        if (version.equals("1.3")) {
            currentOwner.setVersion("1.4");
            LivingRoom livingRoom = currentOwner.getHome().getLivingRoom();
            Smell smell = new Smell();
            smell.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_SMELLS_FOLDER, RoomItemType.POOP_SMELL.getRoomItemType(), Constants.IMAGE_EXT));
            Carpet carpet = new Carpet();
            carpet.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_CARPETS_FOLDER, RoomItemType.DEFAULT_CARPET.getRoomItemType(), Constants.IMAGE_EXT));
            Excrete excrete = new Excrete();
            Poop poop = new Poop();
            poop.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_EXCRETE_FOLDER, RoomItemType.POOP.getRoomItemType(), Constants.IMAGE_EXT));
            excrete.setPoop(poop);
            Window window = new Window();
            window.setCurrentWindowImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_WINDOWS_FOLDER, WindowImage.CLOSED_DAY.getWindowImage(), Constants.IMAGE_EXT));

            livingRoom.setSmell(smell);
            livingRoom.setExcrete(excrete);
            livingRoom.setCarpet(carpet);
            livingRoom.setWindow(window);
        }

        version = currentOwner.getVersion();

        if (version.equals("1.4")) {
            currentOwner.setVersion("1.5");
            List<HashMap<String, Animal>> pets = currentOwner.getPets();
            if (!pets.isEmpty()) {
                for (HashMap<String, Animal> petMap : pets) {
                    for (Animal pet : petMap.values()) {
                        Stats petMinValues = new Stats();
                        petMinValues.setHealth(0);
                        petMinValues.setSatiety(0);
                        petMinValues.setMood(0);
                        petMinValues.setDigestion(0);
                        petMinValues.setToyPlayCount(0);
                        petMinValues.setHydration(-10);
                        pet.setMinValues(petMinValues);
                        Stats petMaxValues = new Stats();
                        petMaxValues.setHealth(1500);
                        petMaxValues.setSatiety(720);
                        petMaxValues.setMood(360);
                        petMaxValues.setDigestion(60);
                        petMaxValues.setToyPlayCount(5);
                        petMaxValues.setHydration(230);
                        pet.setMaxValues(petMaxValues);
                        Stats petStats = new Stats();
                        petStats.setHealth(petMaxValues.getHealth());
                        petStats.setSatiety(petMaxValues.getSatiety());
                        petStats.setMood(petMaxValues.getMood());
                        petStats.setDigestion(petMaxValues.getDigestion());
                        petStats.setToyPlayCount(petMaxValues.getToyPlayCount());
                        petStats.setHydration(petMinValues.getHydration());
                        pet.setStats(petStats);
                        Stats petStatsReducing = new Stats();
                        petStatsReducing.setHealth(1);
                        petStatsReducing.setSatiety(1);
                        petStatsReducing.setMood(1);
                        petStatsReducing.setDigestion(1);
                        petStatsReducing.setToyPlayCount(1);
                        petStatsReducing.setHydration(1);
                        pet.setStatsReducing(petStatsReducing);
                        MoodStats petMoodStats = new MoodStats(35, 35, 35, 35, 35);
                        StatsIncreasing petStatsIncreasing = new StatsIncreasing(1, 1, petMoodStats, 60);
                        pet.setStatsIncreasing(petStatsIncreasing);
                    }
                }
                Inventory inventory = currentOwner.getInventory();
                LitterBox litterBoxInInventory = (LitterBox) inventory.getOtherItems().stream().filter(item -> item.getId().equals("lb-1000")).findFirst().orElse(null);

                Food food = (Food) inventory.getFood().stream().filter(item -> item.getId().equals("chicken-10k")).findFirst().orElse(null);

                if (food != null) {
                    FoodImage image = food.getImage();
                    image.setCurrentImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_FOOD_FOLDER, food.getName(), Constants.IMAGE_EXT));
                    food.setImage(image);
                }

                Toy toy = (Toy) inventory.getToys().stream().filter(item -> item.getId().equals("mouse_1")).findFirst().orElse(null);

                if (toy != null) {
                    ToyImage image = toy.getImage();
                    image.setCurrentImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_TOYS_FOLDER, toy.getName(), Constants.IMAGE_EXT));
                    toy.setImage(image);
                }

                if (litterBoxInInventory != null) {
                    litterBoxInInventory.setMaxSlots(15);
                    litterBoxInInventory.setSlots(11 + litterBoxInInventory.getSlots());
                }

                Home home = currentOwner.getHome();
                LivingRoom livingRoom = home.getLivingRoom();
                Excrete excrete = new Excrete();

                Poop poop = new Poop();
                poop.setPoopOnFloorCount(0);
                poop.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_EXCRETE_FOLDER, RoomItemType.POOP.getRoomItemType(), Constants.IMAGE_EXT));
                excrete.setPoop(poop);
                Pee pee = new Pee();
                pee.setPeeOnFloorCount(0);
                pee.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_EXCRETE_FOLDER, RoomItemType.PEE.getRoomItemType(), Constants.IMAGE_EXT));
                excrete.setPee(pee);

                Window window = new Window();
                window.setCurrentWindowImage(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_WINDOWS_FOLDER, WindowImage.CLOSED_DAY.getWindowImage(), Constants.IMAGE_EXT));
                livingRoom.setWindow(window);
                Smell smell = new Smell();
                smell.setUri(Generator.generatePathToFile(Constants.SHORT_PATH_FORMAT, Constants.ASSETS_SMELLS_FOLDER, RoomItemType.POOP_SMELL.getRoomItemType(), Constants.IMAGE_EXT));
                livingRoom.setSmell(smell);
                livingRoom.setExcrete(excrete);
                LitterBox litterBox = (LitterBox) livingRoom.getLitterBox();
                if (litterBox != null) {
                    litterBox.setMaxSlots(15);
                    litterBox.setSlots(11 + litterBox.getSlots());
                    ImageManager.changeLitterBoxImageBySlotsCount(litterBox);
                }
                livingRoom.setLitterBox(litterBox);
                home.setLivingRoom(livingRoom);
            }
        }

        version = currentOwner.getVersion();

        if (version.equals("1.5")) {
            currentOwner.setVersion("1.6");
            List<HashMap<String, Animal>> pets = currentOwner.getPets();
            if (!pets.isEmpty()) {
                for (HashMap<String, Animal> petMap : pets) {
                    for (Animal pet : petMap.values()) {
                        pet.setCurrentImage(pet.getImg().getRegular());
                    }
                }
            }
        }

        return currentOwner;
    }
}
