package com.sinovdeath.PetsOwnerSimulator.Services.Pets;

import com.google.android.exoplayer2.util.Log;
import com.sinovdeath.PetsOwnerSimulator.Constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.Entities.Alert.Alert;
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
                    Alert tmpAlert = new Alert();
                    currentOwner.setAlert(tmpAlert);

                    if (PetsStatsCalculator.isPetNotDead(currentHealthLevel)) {
                        if (currentSatietyLevel > 0) {
                            if (currentSatietyLevel > Constants.HEALTH_UP_THRESHOLD && currentHealthLevel < Constants.MAX_HEALTH_LEVEL) {
                                pet.getStats().setHealth(PetsStatsCalculator.increaseHealthLevel(currentHealthLevel, pet.getStatsIncreasing().getHealth()));
                            }

                            int newSatiety = PetsStatsCalculator.decreaseSatietyLevel(currentSatietyLevel, pet.getStatsReducing().getSatiety());
                            if (newSatiety == 0) {
                                tmpAlert = Generator.generateAlertByType("zeroSatiety");
                                currentOwner.setAlert(_checkAndCreateAlert(tmpAlert));
                            }

                            pet.getStats().setSatiety(newSatiety);
                        } else {
                            int newHealth = PetsStatsCalculator.decreaseHealthLevel(currentHealthLevel, pet.getStatsReducing().getHealth());
                            if (currentHealthLevel > 0) {
                                if (newHealth == 0) {
                                    tmpAlert = Generator.generateAlertByType("zeroHealth");
                                    currentOwner.setAlert(_checkAndCreateAlert(tmpAlert));
                                }
                            }

                            pet.getStats().setHealth(newHealth);
                        }

                        if (currentDigestionLevel != 0) {
                            int newDigestionLevel = PetsStatsCalculator.decreaseDigestionLevel(currentDigestionLevel, pet.getStatsReducing().getDigestion());
                            pet.getStats().setDigestion(newDigestionLevel);

                            if (newDigestionLevel == 0) {
                                pet.poop();

                                tmpAlert = Generator.generateAlertByType("poopingPet");
                                currentOwner.setAlert(_checkAndCreateAlert(tmpAlert));
                            }
                        }

                        int newMood = PetsStatsCalculator.decreaseMoodLevel(currentMoodLevel, pet.getStatsReducing().getMood());
                        if (currentMoodLevel > 0) {
                            if (newMood == 0) {
                                tmpAlert = Generator.generateAlertByType("zeroMood");
                                currentOwner.setAlert(_checkAndCreateAlert(tmpAlert));
                            }
                        }

                        pet.getStats().setMood(newMood);

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

    private Alert _checkAndCreateAlert(Alert tmpAlert) {
        Alert globalAlert = new Alert();

        if (globalAlert.getVibration() == null && tmpAlert.getVibration() != null) {
            globalAlert = tmpAlert;
        } else if (globalAlert.getSound() == null && tmpAlert.getSound() != null) {
            globalAlert = tmpAlert;
        } else if (globalAlert.getSound() != null && tmpAlert.getSound() != null && globalAlert.getSound().getPriority() > tmpAlert.getSound().getPriority()) {
            globalAlert = tmpAlert;
        }

        return globalAlert;
    }
}
