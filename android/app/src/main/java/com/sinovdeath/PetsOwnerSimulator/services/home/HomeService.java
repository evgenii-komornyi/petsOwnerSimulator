package com.sinovdeath.PetsOwnerSimulator.services.home;

import com.sinovdeath.PetsOwnerSimulator.entities.home.Home;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.HomeStatsCalculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;

public class HomeService implements IHomeService {
    @Override
    public String calculateStats() {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        Home home = currentOwner.getHome();
        Integer currentSmell = home.getSmell();
        Integer poopOnCarpetCount = home.getPoopOnCarpetCount();

        if (poopOnCarpetCount != 0) {
            home.setSmell(HomeStatsCalculator.calculateSmell(currentSmell, poopOnCarpetCount));
        }

        if (home.checkIsWindowOpened()) {
            home.setSmell(HomeStatsCalculator.calculateSmellWithOpenedWindow(currentSmell));
        }

        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }
}
