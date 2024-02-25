package com.sinovdeath.PetsOwnerSimulator.constants;

public class Constants {
    public static final int INTERVALS_COUNT = 60;

    public static final String DATABASE_NAME = "PETS_OWNER_SIMULATOR_DB.pos";
    public static final String HPC = "200.00";
    public static final String HPC_INCREMENT_VALUE = "0.15";

    public static final int MAX_EXCRETE_ON_FLOOR_COUNT = 100;
    public static final int EXCRETE_ON_FLOOR_COUNT_INCREASE = 1;
    public static final int MAX_SMELL_LEVEL = 100;
    public static final int SMELL_FROM_POOP_DECREASE = 2;

    public static final String ASSETS_ROOMS = "asset:/images/backgrounds/home";
    public static final String DEFAULT_ROOM = "room";

    public static final String ASSETS_CATS_FOLDER = "asset:/images/cats";
    public static final String ASSETS_DEAD_FOLDER = "asset:/images/dead-pets";

    public static final String ASSETS_FOOD_FOLDER = "asset:/images/food";
    public static final String ASSETS_TOYS_FOLDER = "asset:/images/toys";
    public static final String ASSETS_LITTER_BOXES_FOLDER = "asset:/images/home-items/litter-boxes";
    public static final String ASSETS_CARPETS_FOLDER = "asset:/images/home-items/carpets";
    public static final String ASSETS_SCRATCHERS_FOLDER = "asset:/images/home-items/scratchers";
    public static final String ASSETS_WINDOWS_FOLDER = "asset:/images/backgrounds/home/windows";
    public static final String ASSETS_EXCRETE_FOLDER = "asset:/images/home-items/excrete";
    public static final String ASSETS_SMELLS_FOLDER = "asset:/images/home-items/smells";
    public static final String ASSETS_FEEDERS_FOLDER = "asset:/images/home-items/feeders";
    public static final String ASSETS_HOLIDAYS_FOLDER = "asset:/images/holidays";

    public static final String ASSETS_TONGUE_FOLDER = "asset:/animation/pets/lick";

    public static final String IMAGE_EXT = ".png";
    public static final String ANIMATION_EXT = ".gif";

    public static final String SHORT_PATH_FORMAT = "%s/%s%s";
    public static final String LONG_PATH_FORMAT = "%s/%s/%s%s";
    public static final String HOLIDAY_PATH_FORMAT = "%s/%s/%s/%s%s";

    public static final int DAMAGE = 1;
    public static final int MOOD_DECREASE_AFTER_SCRATCHING_FAILED = 50;

    public static final int BIRTHDAY_PRIORITY = 1;
    public static final int OTHER_HOLIDAYS_PRIORITY = 5;

    public static final String HALLOWEEN_DATES = "22.10, 23.10, 24.10, 25.10, 26.10, 27.10, 28.10, 29.10, 30.10, 31.10, 01.11, 02.11";

    public static final String VERSION = "1.5";

    public static final String NOTIFICATION_TITLE = "I am hungry!";
    public static final String NOTIFICATION_BODY = "You have to feed your pets!";
}
