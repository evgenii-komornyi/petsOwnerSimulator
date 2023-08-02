package com.sinovdeath.PetsOwnerSimulator.Services.Pets;

import com.sinovdeath.PetsOwnerSimulator.Constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators.Calculator;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators.PetsStatsCalculator;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.Managers.OwnerManager;

import java.util.HashMap;
import java.util.List;

public class PetsService implements IPetsService {
    @Override
    public String calculateStats() {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        List<HashMap<String, Animal>> pets = currentOwner.getPets();

        if (!pets.isEmpty()) {
            for (HashMap<String, Animal> petMap : pets) {
                for (Animal pet : petMap.values()) {
                    int currentHealthLevel = pet.getStats().getHealth();
                    int currentSatietyLevel = pet.getStats().getSatiety();
                    int currentMoodLevel = pet.getStats().getMood();
                    int currentDigestionLevel = pet.getStats().getDigestion();

                    if (PetsStatsCalculator.isPetNotDead(currentHealthLevel)) {
                        if (currentSatietyLevel > 0) {
                            if (currentSatietyLevel > Constants.HEALTH_UP_THRESHOLD && currentHealthLevel < Constants.MAX_HEALTH_LEVEL) {
                                pet.getStats().setHealth(PetsStatsCalculator.increaseHealthLevel(currentHealthLevel, pet.getStatsIncreasing().getHealth()));
                            }

                            pet.getStats().setSatiety(PetsStatsCalculator.decreaseSatietyLevel(currentSatietyLevel, pet.getStatsReducing().getSatiety()));
                        } else {
                            pet.getStats().setHealth(PetsStatsCalculator.decreaseHealthLevel(currentHealthLevel, pet.getStatsReducing().getHealth()));
                        }

                        if (currentDigestionLevel != 0) {
                            int newDigestionLevel = PetsStatsCalculator.decreaseDigestionLevel(currentDigestionLevel, pet.getStatsReducing().getDigestion());
                            pet.getStats().setDigestion(newDigestionLevel);

                            if (newDigestionLevel == 0) {
                                pet.poop();
                            }
                        }

                        pet.getStats().setMood(PetsStatsCalculator.decreaseMoodLevel(currentMoodLevel, pet.getStatsReducing().getMood()));

                        if (PetsStatsCalculator.isPetStillHappy(currentHealthLevel, currentSatietyLevel, currentMoodLevel)) {
                            currentOwner.setHappyPetCoins(Calculator.increaseHappyPetCoins(currentOwner.getHappyPetCoins()));
                        }
                    }
                }
            }
        }

        OwnerManager.setOwner(currentOwner);

        return Generator.generateJson(OwnerManager.getCurrentOwner());
    }
}
