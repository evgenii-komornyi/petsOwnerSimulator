package com.sinovdeath.PetsOwnerSimulator.helpers.generators.help;

import android.os.Build;

import androidx.annotation.RequiresApi;

import com.sinovdeath.PetsOwnerSimulator.entities.help.HelpItem;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class HelpGenerator {
    @RequiresApi(api = Build.VERSION_CODES.N)
    public static List<HelpItem> generateHelp() {
        List<HelpItem> helpItems = new ArrayList<>();

        // Pet
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Stats",
                        "There are visible and invisible stats of the pet. " +
                                "Visible stats are located on the right side of the pet picture. " +
                                "For some a status bar is available. For others there is only an icon, " +
                                "when pet riched specific value.",
                        "1.0",
                        Stream.of("stats").collect(Collectors.toList()),
                        "asset:/images/help/pet/stats.png")
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Health",
                        "The Health status bar is marked with a heart icon. " +
                                "Pet is loosing health points when he is hungry, dehydrated, " +
                                "or is drinking dirty water. " +
                                "While the pet has more than 50% satiety, " +
                                "health is restored if he is hydrated at this time.",
                        "1.0",
                        Stream.of("health", "stats").collect(Collectors.toList()),
                        "asset:/images/help/pet/health.png")
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Satiety",
                        "The Satiety status bar is marked with a food bowl icon. " +
                                "Pet is loosing satiety point every interval. " +
                                "To restore the satiety you have to feed the pet.",
                        "1.0",
                        Stream.of("satiety", "stats").collect(Collectors.toList()),
                        "asset:/images/help/pet/satiety.png")
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Mood",
                        "The Mood status bar is marked with a smile icon. " +
                                "Pet is loosing mood point every interval. " +
                                "To restore the mood you have to pet the pet. " +
                                "It is also possible to put a toy into the room for pet to restore the mood on his own. " +
                                "Smell decreases mood.",
                        "1.0",
                        Stream.of("mood", "stats").collect(Collectors.toList()),
                        "asset:/images/help/pet/mood.png")
        );
        /*helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Digestion",
                        "Digestion process starts when you are feeding a pet. " +
                                "After some time the cat will poop.",
                        "1.0",
                        Stream.of("digestion").collect(Collectors.toList()),
                        "asset:/images/help/pet/digestion.png")
        );*/
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Hydration",
                        "The Hydration stat is invisible. " +
                                "Water drop icon appears when the pet is dehydrated. " +
                                "Pet is loosing hydration point every interval. " +
                                "Pet restores the hydration from the water bowl in the room.",
                        "1.0",
                        Stream.of("hydration", "stats").collect(Collectors.toList()),
                        "asset:/images/help/pet/hydration.png"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Pet adoption",
                        "Use the adopt button to choose your pet. " +
                                "It is currently possible to adopt 2 pets maximum. " +
                                "If the pet was taken from you, it is not possible to adopt them again. " +
                                "Every pet has their own story at the back of the adoption card.",
                        "1.0",
                        Stream.of("pet adoption").collect(Collectors.toList()),
                        "asset:/images/help/pet/pet_adoption.png"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Pet loosing",
                        "When the pet health is reaching 0 (zero), shelter is taking them away. " +
                                "It is possible to press the Say Goodbye button to hide this pet from your screen.",
                        "1.0",
                        Stream.of("pet loosing").collect(Collectors.toList()),
                        "asset:/images/help/pet/pet_loosing.png"
                )
        );

        // Interactions
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Feeding",
                        "To feed the pet press on the stats panel, the sub menu with available food will open. " +
                                "Click on the food icon. " +
                                "If you do not have any food in the sub menu, use the shop to buy it.",
                        "1.0",
                        Stream.of("feeding").collect(Collectors.toList()),
                        "asset:/images/help/interactions/feeding.gif"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Petting",
                        "Put your finger on the image of your pet and swipe it to any direction, " +
                                "and then release finger. " +
                                "If you did it in right way, cat will purr, and the Mood stat will increase.",
                        "1.0",
                        Stream.of("petting").collect(Collectors.toList()),
                        "asset:/images/help/interactions/petting.gif"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Playing",
                        "Buy a toy in the shop. " +
                                "Press on the stats panel of a pet to open the sub menu, " +
                                "choose the tab with toys, and press on a toy icon. " +
                                "The toy will be placed on the sofa in the room. " +
                                "The cat will play with the toy sometimes and will be happy.",
                        "1.0",
                        Stream.of("playing").collect(Collectors.toList()),
                        "asset:/images/help/interactions/playing.gif"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Pet poking",
                        "If you poke the cats in the room, they will respond with a sound.",
                        "1.8",
                        Stream.of("poking").collect(Collectors.toList()),
                        "asset:/images/help/interactions/pet_poking.png"
                )
        );

        // Home
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Scratchers",
                        "Scratchers is used to scratch the nails.",
                        "1.0",
                        Stream.of("scratchers").collect(Collectors.toList()),
                        "asset:/images/help/home/scratchers.png"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Litter box",
                        "Cats are using the litter box to pee and poop. " +
                                "If owner does not have the litter box in the room, " +
                                "cats will poop and pee on the floor. " +
                                "The litter box has to be cleaned up. " +
                                "Once the litter box is full, cats stop using it. " +
                                "To clean up the litter box press on it. " +
                                "The litter box can be bought in the shop.",
                        "1.0",
                        Stream.of("litter box").collect(Collectors.toList()),
                        "asset:/images/help/home/litter_box.png"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Bowl",
                        "Bowl contains water for the cat to drink. " +
                                "Water in the bowl can become dirty or cat can drink it all out. " +
                                "If water is dirty, cat will loose Health points. " +
                                "To clean up and refill the Bowl press on it.",
                        "1.0",
                        Stream.of("bowl").collect(Collectors.toList()),
                        "asset:/images/help/home/bowl.png"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Window",
                        "The window is used to get the fresh air in the room. " +
                                "To open or close it, press on it.",
                        "1.0",
                        Stream.of("window").collect(Collectors.toList()),
                        "asset:/images/help/home/window.png"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Smell",
                        "When a cats' poo or pee are on the floor, Smell is produced. " +
                                "When Smell in the room, cat looses the Mood points. " +
                                "To get rid the Smell, clean up the room by pressing on the dirties, and open the Window.",
                        "1.0",
                        Stream.of("smell").collect(Collectors.toList()),
                        "asset:/images/help/home/smell.png"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Dirtiness",
                        " If owner does not have the litter box in the room, cats will poop and pee on the floor. " +
                                "To clean up poo or pee, press on it.",
                        "1.0",
                        Stream.of("dirtiness").collect(Collectors.toList()),
                        "asset:/images/help/home/dirtiness.png"
                )
        );

        // Items

        // Shop
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Buying",
                        "To buy item you need HPC (Happy pets coins). " +
                                "Press on buy button to buy it. " +
                                "Some items can has quantity. " +
                                "To increase or decrease it press on buttons + or - and then buy this item.",
                        "1.0",
                        Stream.of("buying").collect(Collectors.toList()),
                        "asset:/images/help/shop/buying.png"
                )
        );

        // Owner
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "HPC",
                        "Happy pets coins is the game currency. " +
                                "While your pet is happy, HPC will generating. " +
                                "You can buy items in the shop using HPC.",
                        "1.0",
                        Stream.of("happy pets coins").collect(Collectors.toList()),
                        "asset:/images/help/owner/hpc.png"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Interval",
                        "Currently interval is 1 minute (60 seconds). " +
                                "Every changes in the game is happening once per Interval.",
                        "1.0",
                        Stream.of("intervals").collect(Collectors.toList()),
                        "none"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Save/Load Game",
                        "Once the game is started, all the changes from the last save are calculated. " +
                                "If the time period from the save moment is too long for the pets to survive, " +
                                "the game does not calculate the room state and HPC. " +
                                "The game is saving when you are closing it.",
                        "1.0",
                        Stream.of("save/load game").collect(Collectors.toList()),
                        "none"
                )
        );

        // Settings
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Alarms and Notification",
                        "It is possible to set the alarms to remind about your pet at specific time.",
                        "1.0",
                        Stream.of("alarms and notifications").collect(Collectors.toList()),
                        "asset:/images/help/settings/alarms_notifications.png"
                )
        );
        helpItems.add(
                _generateHelpItem(
                        Generator.generateID(),
                        "Settings Screen",
                        "To switch between settings and pets screens press this button.",
                        "1.0",
                        Stream.of("settings screen").collect(Collectors.toList()),
                        "asset:/images/help/settings/settings.png"
                )
        );

        return helpItems;
    }

    private static HelpItem _generateHelpItem(String id, String title, String description, String version, List<String> tags, String image) {
        return new HelpItem(id, title, description, version, tags, image);
    }
}
