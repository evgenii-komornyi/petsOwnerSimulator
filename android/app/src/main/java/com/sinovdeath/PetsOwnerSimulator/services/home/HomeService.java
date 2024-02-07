package com.sinovdeath.PetsOwnerSimulator.services.home;

import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Smell;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.excrete.Excrete;
import com.sinovdeath.PetsOwnerSimulator.entities.items.feeder.Feeder;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.HomeStatsCalculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;

public class HomeService implements IHomeService {
    @Override
    public String calculateStats() {
        Owner currentOwner = OwnerManager.getCurrentOwner();

        LivingRoom livingRoom = currentOwner.getHome().getLivingRoom();
        Excrete excrete = livingRoom.getExcrete();
        Smell smell = livingRoom.getSmell();
        Feeder waterBowl = (Feeder) livingRoom.getFeeder();

        int currentSmell = smell.getSmell();
        int poopOnFloorCount = excrete.getPoop().getPoopOnFloorCount();
        int peeOnFloorCount = excrete.getPee().getPeeOnFloorCount();

        if (poopOnFloorCount != 0) {
            smell.setSmell(HomeStatsCalculator.calculateSmell(currentSmell, poopOnFloorCount));
        }

        currentSmell = smell.getSmell();

        if (peeOnFloorCount != 0) {
            smell.setSmell(HomeStatsCalculator.calculateSmell(currentSmell, peeOnFloorCount));
        }

        if (livingRoom.getWindow().checkIsWindowOpened()) {
                smell.setSmell(HomeStatsCalculator.calculateSmellWithOpenedWindow(currentSmell, 2));
        }

        if (waterBowl != null) {
            int currentDirtinessCalmDown = waterBowl.getDirtinessCalmDown();

            waterBowl.setDirtinessCalmDown(HomeStatsCalculator.calculateWaterBowlDirtiness(currentDirtinessCalmDown, 1));

            if (waterBowl.getDirtinessCalmDown() <= 0 && !waterBowl.isBowlEmpty()) {
                waterBowl.becomeDirty();
            }

            if (waterBowl.isBowlEmpty()) {
                waterBowl.getImage().setCurrentImage(waterBowl.getImage().getEmpty());
            }
        }

        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }
}
