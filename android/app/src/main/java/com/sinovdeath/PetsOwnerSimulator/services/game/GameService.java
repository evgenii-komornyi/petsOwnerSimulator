package com.sinovdeath.PetsOwnerSimulator.services.game;

import android.icu.text.SimpleDateFormat;
import android.icu.util.TimeZone;
import android.os.Build;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;
import com.sinovdeath.PetsOwnerSimulator.repositories.game.GameRepository;
import com.sinovdeath.PetsOwnerSimulator.repositories.game.IGameRepository;
import com.sinovdeath.PetsOwnerSimulator.modules.PetsModule;
import com.sinovdeath.PetsOwnerSimulator.services.pets.IPetsService;

import java.text.ParseException;
import java.util.Date;
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
            Owner newOwner = new Owner(Generator.generateID(), "Owner");
            OwnerManager.setOwner(newOwner);
        } else {
            IPetsService petsService = PetsModule.getPetsService();
            OwnerManager.setOwner(existingOwnerInDB);
            Date currentDate = new Date();
            Date saveMomentDate = parseUtcDateTimeString(saveMoment);
            long saveMomentInSeconds = saveMomentDate.getTime() / 1000;
            long loadMomentInSeconds = currentDate.getTime() / 1000;
            long differenceInSeconds = loadMomentInSeconds - saveMomentInSeconds;

            for(int i = 0; i <= differenceInSeconds / Constants.INTERVALS_COUNT; i++) {
                petsService.calculateStats();
            }
        }
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
}
