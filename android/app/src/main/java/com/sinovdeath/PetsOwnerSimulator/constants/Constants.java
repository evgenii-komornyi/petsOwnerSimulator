package com.sinovdeath.PetsOwnerSimulator.constants;

public class Constants {
    public static final int INTERVALS_COUNT = 60;

    public static final String DATABASE_NAME = "PETS_OWNER_SIMULATOR_DB.pos";
    public static final String HPC = "200.00";
    public static final String HPC_INCREMENT_VALUE = "0.15";

    public static final int MAX_POOP_ON_CARPET_COUNT = 100;
    public static final int POOP_ON_CARPET_COUNT_INCREASE = 1;
    public static final int MAX_SMELL_LEVEL = 100;
    public static final int SMELL_DECREASE = 2;

    public static final String ASSETS_ROOMS = "asset:/images/backgrounds/home";
    public static final String DEFAULT_ROOM = "room";

    public static final String ASSETS_CATS_FOLDER = "asset:/images/cats";
    public static final String ASSETS_DEAD_FOLDER = "asset:/images/dead-pets";

    public static final String ASSETS_FOOD_FOLDER = "asset:/images/food";
    public static final String ASSETS_TOYS_FOLDER = "asset:/images/toys";
    public static final String ASSETS_LITTER_BOXES_FOLDER = "asset:/images/home-items/litter-boxes";
    public static final String ASSETS_SCRATCHERS_FOLDER = "asset:/images/home-items/scratchers";
    public static final String ASSETS_TONGUE_FOLDER = "asset:/animation/pets/lick";
    public static final String IMAGE_EXT = ".png";
    public static final String ANIMATION_EXT = ".gif";

    public static final String SHORT_PATH_FORMAT = "%s/%s%s";
    public static final String LONG_PATH_FORMAT = "%s/%s/%s%s";
    public static final int DAMAGE = 1;
    public static final int MOOD_DECREASE_AFTER_SCRATCHING_FAILED = 50;
}
