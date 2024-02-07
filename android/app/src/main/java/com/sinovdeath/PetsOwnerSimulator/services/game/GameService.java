package com.sinovdeath.PetsOwnerSimulator.services.game;

import android.icu.text.SimpleDateFormat;
import android.icu.util.TimeZone;
import android.os.Build;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.google.android.exoplayer2.util.Log;
import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.home.Home;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Alarm;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Notification;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Settings;
import com.sinovdeath.PetsOwnerSimulator.helpers.checkers.Checker;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;
import com.sinovdeath.PetsOwnerSimulator.modules.HomeModule;
import com.sinovdeath.PetsOwnerSimulator.repositories.game.GameRepository;
import com.sinovdeath.PetsOwnerSimulator.repositories.game.IGameRepository;
import com.sinovdeath.PetsOwnerSimulator.modules.PetsModule;
import com.sinovdeath.PetsOwnerSimulator.services.home.IHomeService;
import com.sinovdeath.PetsOwnerSimulator.services.pets.IPetsService;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

public class GameService implements IGameService {
    private final ReactApplicationContext _context;
    private final IGameRepository _gameRepository;

    public GameService(ReactApplicationContext context) {
        this._context = context;
        this._gameRepository = new GameRepository(_context);
    }
    @Override
    public void write() {
        _gameRepository.saveToDB();
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public void read(String saveMoment) {
        Owner existingOwnerInDB = _gameRepository.loadFromDB();

        if (existingOwnerInDB == null) {
            Owner newOwner = new Owner(Generator.generateID(), "Owner", Constants.VERSION);
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
            newOwner.setSettings(settings);

            Home home = new Home();
            newOwner.setHome(home);
            OwnerManager.setOwner(newOwner);
        } else {
            OwnerManager.setOwner(existingOwnerInDB);
            long differenceInSeconds = _calculateDifferenceBetweenSaveAndLoadMoments(saveMoment);
            int intervalsAmountPetCanBeAliveAndWellFed = new Interval().calculateMaxAmountOfIntervals();
            long intervalsCount = differenceInSeconds / Constants.INTERVALS_COUNT;

            if (intervalsCount > intervalsAmountPetCanBeAliveAndWellFed) {
                _killAllPets();
            }

            _runCalculations(intervalsCount);

            for (HashMap<String, Animal> petMap : existingOwnerInDB.getPets()) {
                for (Animal pet : petMap.values()) {
                    pet.getStats().setHydration(150);
                }
            }
        }
    }

    @Override
    public void remove() {
        _gameRepository.removeDB();
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    private void _runCalculations(long intervalsCount) {
        IPetsService petsService = PetsModule.getPetsService();
        IHomeService homeService = HomeModule.getHomeService();

        for(int i = 0; i <= intervalsCount; i++) {
            if (Checker.IsEveryPetDead(OwnerManager.getCurrentOwner().getPets())) {
                Log.d("every dead", String.valueOf(Checker.IsEveryPetDead(OwnerManager.getCurrentOwner().getPets())));
                break;
            }

            petsService.calculateStats();
            homeService.calculateStats();
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    private long _calculateDifferenceBetweenSaveAndLoadMoments(String saveMoment) {
        Date currentDate = new Date();
        Date saveMomentDate = parseUtcDateTimeString(saveMoment);
        long saveMomentInSeconds = (saveMomentDate != null ? saveMomentDate.getTime() : 0) / 1000;
        long loadMomentInSeconds = currentDate.getTime() / 1000;

        return loadMomentInSeconds - saveMomentInSeconds;
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    private Date parseUtcDateTimeString(String saveMoment) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("EEE, dd MMM yyyy HH:mm:ss z", Locale.US);
        dateFormat.setTimeZone(TimeZone.getTimeZone("GMT"));

        try {
            return dateFormat.parse(saveMoment);
        } catch (ParseException e) {
            e.printStackTrace();
            return null;
        }
    }

    private void _killAllPets() {
        for (HashMap<String, Animal> petMap : OwnerManager.getCurrentOwner().getPets()) {
            for (Animal pet : petMap.values()) {
                pet.getStats().setHealth(0);
                pet.getStats().setSatiety(0);
                pet.getStats().setMood(0);
                pet.getStats().setDigestion(0);
                pet.getStats().setToyPlayCount(0);
                Log.d("health", pet.getName() + " - " + String.valueOf(pet.getStats().getHealth()));
            }
        }
    }

    private static class Interval {
        private int maxIntervalsPetCanBeAlive;
        private int maxIntervalsPetCanBeWellFed;

        public Interval() {
            this.maxIntervalsPetCanBeAlive = 0;
            this.maxIntervalsPetCanBeWellFed = 0;
        }

        public int calculateMaxAmountOfIntervals() {
            calculateMaxIntervals();

            return maxIntervalsPetCanBeAlive + maxIntervalsPetCanBeWellFed;
        }

        private void calculateMaxIntervals() {
            for (HashMap<String, Animal> petMap : OwnerManager.getCurrentOwner().getPets()) {
                for (Animal pet : petMap.values()) {
                    if (pet.getMaxValues().getHealth() > maxIntervalsPetCanBeAlive) {
                        maxIntervalsPetCanBeAlive = pet.getMaxValues().getHealth() / pet.getStatsReducing().getHealth();
                    }

                    if (pet.getMaxValues().getSatiety() > maxIntervalsPetCanBeWellFed) {
                        maxIntervalsPetCanBeWellFed = pet.getMaxValues().getSatiety() / pet.getStatsReducing().getSatiety();
                    }
                }
            }
        }

        public int getMaxIntervalsPetCanBeAlive() { return maxIntervalsPetCanBeAlive; }

        public int getMaxIntervalsPetCanBeWellFed() { return maxIntervalsPetCanBeWellFed; }
    }
}
