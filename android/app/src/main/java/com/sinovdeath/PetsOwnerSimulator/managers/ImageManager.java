package com.sinovdeath.PetsOwnerSimulator.managers;

import com.google.android.exoplayer2.util.Log;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBoxImage;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Image;
import com.sinovdeath.PetsOwnerSimulator.entities.stats.Stats;

public class ImageManager {
    public static void changeLitterBoxImageBySlotsCount(LitterBox litterBox) {
        LitterBoxImage images = litterBox.getImage();
        int countSlotsToChangeImage = (int) Math.floor(litterBox.getMaxSlots() * 0.5);
        String pathToImage = "";

        if (litterBox.getSlots() == 0) {
            pathToImage = images.getFull();
        } else if (litterBox.getSlots() <= countSlotsToChangeImage) {
            pathToImage = images.getUsed();
        } else {
            pathToImage = images.getEmpty();
        }

        images.setCurrentImage(pathToImage);
    }

    public static void changePetImageByStats(Animal pet) {
        Image images = pet.getImg();
        Stats stats = pet.getStats();
        String pathToImage;

        if (stats.getHealth() == 0) {
            pathToImage = images.getDead();
        } else if (stats.getMood() == 0) {
            pathToImage = images.getSad();
        } else {
            pathToImage = images.getRegular();
        }

        pet.setCurrentImage(pathToImage);
    }
}
