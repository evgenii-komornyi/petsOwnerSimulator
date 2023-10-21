package com.sinovdeath.PetsOwnerSimulator.helpers.generators;

import com.google.gson.Gson;
import com.sinovdeath.PetsOwnerSimulator.entities.alert.Alert;
import com.sinovdeath.PetsOwnerSimulator.managers.SoundManager;
import com.sinovdeath.PetsOwnerSimulator.managers.VibrationManager;

import java.util.UUID;

public class Generator {
    public static String generateID() {
        return UUID.randomUUID().toString();
    }

    public static String generateJson(Object object) {
        return new Gson().toJson(object);
    }

    public static Alert generateAlertByType(String alertType) {
        Alert alert = null;
        switch (alertType) {
            case "zeroSatiety":
                alert = new Alert();
                alert.setVibration(VibrationManager.getZeroSatiety());
                break;
            case "zeroMood":
                alert = new Alert();
                alert.setSound(SoundManager.getSadSound());
                alert.setVibration(VibrationManager.getZeroMood());
                break;
            case "zeroHealth":
                alert = new Alert();
                alert.setVibration(VibrationManager.getZeroHealth());
                break;
            case "poopingPet":
                alert = new Alert();
                alert.setSound(SoundManager.getPooSound());
                alert.setVibration(VibrationManager.getPoopingPet());
                break;
        }

        return alert;
    }

    public static String generatePathToFile(String pathFormat, String assetsFolder, String nameFolder, String fileName, String imageExt) {
        return String.format(pathFormat, assetsFolder, nameFolder, fileName, imageExt);
    }

    public static String generatePathToFile(String pathFormat, String assetsFolder, String nameFolder, String categoryName, String fileName, String imageExt) {
        return String.format(pathFormat, assetsFolder, nameFolder, categoryName, fileName, imageExt);
    }
    public static String generatePathToFile(String pathFormat, String assetsFolder, String fileName, String imageExt) {
        return String.format(pathFormat, assetsFolder, fileName, imageExt);
    }
}
