package com.sinovdeath.PetsOwnerSimulator.services.pets;

import android.os.Build;

import androidx.annotation.RequiresApi;

import com.sinovdeath.PetsOwnerSimulator.entities.alert.Alert;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.Toy;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.entities.stats.Stats;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.Calculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.HomeStatsCalculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.calculators.PetsStatsCalculator;
import com.sinovdeath.PetsOwnerSimulator.helpers.checkers.Checker;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;

import java.util.HashMap;
import java.util.List;
import java.util.Random;

public class PetsService implements IPetsService {
    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public void calculateStats() {
        Owner currentOwner = OwnerManager.getCurrentOwner();

        if (Checker.IsEveryPetDead(currentOwner.getPets())) {
            return;
        }

        Toy toy = (Toy) currentOwner.getHome().getLivingRoom().getToy();
        List<HashMap<String, Animal>> pets = currentOwner.getPets();

        if (!pets.isEmpty()) {
            for (HashMap<String, Animal> petMap : pets) {
                for (Animal pet : petMap.values()) {
                    Stats currentPetStats = pet.getStats();
                    int currentHealthLevel = currentPetStats.getHealth();
                    int currentSatietyLevel = currentPetStats.getSatiety();
                    int currentMoodLevel = currentPetStats.getMood();
                    int currentDigestionLevel = currentPetStats.getDigestion();
                    int currentToyPlayCount = currentPetStats.getToyPlayCount();
                    Stats maxValues = pet.getMaxValues();
                    int maxHealthLevel = maxValues.getHealth();
                    double healthThreshold = maxHealthLevel * 0.5;
                    int maxMoodLevel = maxValues.getMood();
                    Alert tmpAlert = new Alert();
                    currentOwner.setAlert(tmpAlert);

                    if (PetsStatsCalculator.isPetNotDead(currentHealthLevel)) {
                        if (currentSatietyLevel > 0) {
                            if (currentSatietyLevel > healthThreshold && currentHealthLevel < maxHealthLevel) {
                                pet.getStats().setHealth(PetsStatsCalculator.increaseHealthLevel(currentHealthLevel, pet.getStatsIncreasing().getHealth(), maxHealthLevel));
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

                        if (toy != null && toy.getDurability() != null && currentToyPlayCount > 0) {
                            if (currentMoodLevel == 0) {
                                if (_decideToPlay()) {
                                    toy.setDurability(HomeStatsCalculator.calculateToyDurability(toy.getDurability()));
                                    pet.getStats().setMood(PetsStatsCalculator.calculateMoodAfterPetPlaysToy(currentMoodLevel, toy.getStats().getHappiness(), maxMoodLevel));
                                    pet.getStats().setToyPlayCount(PetsStatsCalculator.decreaseToyPlayCount(currentToyPlayCount, pet.getStatsReducing().getToyPlayCount()));
                                }
                            }
                        }


                        if (PetsStatsCalculator.isPetStillHappy(currentHealthLevel, currentSatietyLevel, currentMoodLevel)) {
                            currentOwner.setHappyPetCoins(Calculator.increaseHappyPetCoins(currentOwner.getHappyPetCoins()));
                        }
                    }

                }
            }
        }


        OwnerManager.setOwner(currentOwner);
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

    private boolean _decideToPlay() {
        Random random = new Random();
        int chanceToPlay = random.nextInt(100) + 1;

        return chanceToPlay <= 20;
    }
}
