package com.sinovdeath.PetsOwnerSimulator.services.home;

import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Smell;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.HomeStatsCalculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;

public class HomeService implements IHomeService {
    @Override
    public String calculateStats() {
        Owner currentOwner = OwnerManager.getCurrentOwner();

        LivingRoom livingRoom = currentOwner.getHome().getLivingRoom();
        Smell smell = livingRoom.getSmell();

        int currentSmell = smell.getSmell();
        int poopOnCarpetCount = livingRoom.getPoop().getPoopOnCarpetCount();

        if (poopOnCarpetCount != 0) {
            smell.setSmell(HomeStatsCalculator.calculateSmell(currentSmell, poopOnCarpetCount));
        }

        if (livingRoom.getWindow().checkIsWindowOpened()) {
            smell.setSmell(HomeStatsCalculator.calculateSmellWithOpenedWindow(currentSmell));
        }

        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }
}
