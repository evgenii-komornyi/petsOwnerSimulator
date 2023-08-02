package com.sinovdeath.PetsOwnerSimulator.Services.Home;

import com.sinovdeath.PetsOwnerSimulator.Entities.Home.Home;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators.HomeStatsCalculator;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.Managers.OwnerManager;

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
