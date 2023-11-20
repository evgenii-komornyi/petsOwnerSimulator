package com.sinovdeath.PetsOwnerSimulator.services.owner;

import android.content.ComponentName;
import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;

import androidx.annotation.RequiresApi;

import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Alarm;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Notification;
import com.sinovdeath.PetsOwnerSimulator.enums.ItemType;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.Calculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.converters.Converter;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;
import com.sinovdeath.PetsOwnerSimulator.receivers.BootReceiver;

import java.util.List;

public class OwnerService implements IOwnerService {
    Context _context;

    public OwnerService(Context context) {
        _context = context;
    }

    @Override
    public String increaseHappyPetCoins() {
        Owner owner = OwnerManager.getCurrentOwner();
        owner.setHappyPetCoins(Calculator.increaseHappyPetCoins(owner.getHappyPetCoins()));
        OwnerManager.setOwner(owner);

        return Generator.generateJson(OwnerManager.getCurrentOwner().getHappyPetCoins());
    }

    @Override
    public String adoptPet(String petType, String petToAdopt) {
        Animal pet = Converter.convertPetFromString(petType, petToAdopt);
        Owner owner = OwnerManager.getCurrentOwner();
        owner.adoptPet(pet);
        OwnerManager.setOwner(owner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String feedPet(String petId, String itemId) {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.feedPet(petId, itemId);
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String petPet(String petId, String swipeDirection) {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.petPet(petId, swipeDirection);
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String sayGoodbye(String petId) {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.sayGoodbye(petId);
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String buyItem(String itemType, String itemToBuy) {
        Item item = Converter.convertItemFromString(itemType, itemToBuy);
        Owner owner = OwnerManager.getCurrentOwner();

        if (itemType.equals(ItemType.LITTER_BOX.getItemType()) || itemType.equals(ItemType.CAT_HOUSE.getItemType()))
        {
            owner.setHome(Converter.createHomeWithCorrectItems(item));
        }

        owner.setInventory(Converter.createInventoryWithCorrectItems(itemType, item));
        owner.setHappyPetCoins(Calculator.calculateHappyPetCoins(owner, item));
        OwnerManager.setOwner(owner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String interactWithWindow() {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.interactWithWindow();
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String cleanRoom() {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.cleanRoom();
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @Override
    public String cleanLitterBox() {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.cleanLitterBox();
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public String putItemInRoom(String itemType, String itemToPut) {
        Item item = Converter.convertItemFromString(itemType, itemToPut);
        Owner currentOwner = OwnerManager.getCurrentOwner();
        currentOwner.putItemInRoom(item);
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public String changeAlarmTime(int alarmId, int alarmHours, int alarmMinutes) {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        Alarm alarmToChange = currentOwner.getSettings().getAlarms().stream().filter(alarm -> alarm.getId() == alarmId).findFirst().get();
        if (alarmToChange != null) {
            alarmToChange.setHour(alarmHours);
            alarmToChange.setMinutes(alarmMinutes);
        }
        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public String changeAlarmActivity(int alarmId, boolean alarmActivityFlag) {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        Alarm alarmToChange = currentOwner.getSettings().getAlarms().stream().filter(alarm -> alarm.getId() == alarmId).findFirst().get();
        if (alarmToChange != null) {
            alarmToChange.setAlarmActive(alarmActivityFlag);
        }
        OwnerManager.setOwner(currentOwner);

        _toggleBootReceiver(alarmActivityFlag, currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }


    @Override
    public String saveNotification(String title, String body) {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        Notification notificationToChange = currentOwner.getSettings().getFeedingNotification();
        notificationToChange.setTitle(title);
        notificationToChange.setBody(body);

        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    private void _toggleBootReceiver(boolean alarmActivityFlag, Owner currentOwner) {
        ComponentName receiver = new ComponentName(_context, BootReceiver.class);
        PackageManager pm = _context.getPackageManager();
        if (alarmActivityFlag) {
            pm.setComponentEnabledSetting(receiver,
                    PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
                    PackageManager.DONT_KILL_APP);
        } else {
            List<Alarm> alarms = currentOwner.getSettings().getAlarms();
            if (alarms.stream().allMatch(alarm -> !alarm.isAlarmActive())) {
                pm.setComponentEnabledSetting(receiver,
                        PackageManager.COMPONENT_ENABLED_STATE_DISABLED,
                        PackageManager.DONT_KILL_APP);
            }
        }
    }
}
