package com.sinovdeath.PetsOwnerSimulator.services.migrator;

import com.google.android.exoplayer2.util.Log;
import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Alarm;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Notification;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Settings;
import com.sinovdeath.PetsOwnerSimulator.enums.UriType;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;

import java.math.BigDecimal;
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

        return currentOwner;
    }
}
