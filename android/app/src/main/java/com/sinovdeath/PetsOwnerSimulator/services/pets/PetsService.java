package com.sinovdeath.PetsOwnerSimulator.services.pets;

import android.content.Context;
import android.os.Build;
import androidx.annotation.RequiresApi;
import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.entities.alert.Alert;
import com.sinovdeath.PetsOwnerSimulator.entities.items.IScratchable;
import com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher.CatHouse;
import com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher.ScratcherImage;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.NonInteractToy;
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
    private final Context _context;

    public PetsService(Context _context) {
        this._context = _context;
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public void calculateStats() {
        Owner currentOwner = OwnerManager.getCurrentOwner();

        if (Checker.IsEveryPetDead(currentOwner.getPets())) {
            return;
        }

        Toy toy = (Toy) currentOwner.getHome().getLivingRoom().getToy();
        CatHouse catHouse = (CatHouse) currentOwner.getHome().getLivingRoom().getCatHouse();
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

                        if (toy != null && toy.getId() != null && toy instanceof NonInteractToy) {
                            NonInteractToy nonInteractToy = (NonInteractToy) toy;

                            if (nonInteractToy.getDurability() != null && ((IScratchable) nonInteractToy).getDurability() > 0 && currentToyPlayCount > 0) {
                                if (currentMoodLevel == 0) {
                                    if (_decideToPlay()) {
                                        ((IScratchable) nonInteractToy).setDurability(HomeStatsCalculator.calculateToyDurability(((IScratchable) nonInteractToy).getDurability(), Constants.DAMAGE));
                                        pet.getStats().setMood(PetsStatsCalculator.calculateMoodAfterPetPlaysToy(currentMoodLevel, toy.getStats().getHappiness(), maxMoodLevel));
                                        pet.getStats().setToyPlayCount(PetsStatsCalculator.decreaseToyPlayCount(currentToyPlayCount, pet.getStatsReducing().getToyPlayCount()));
                                    }
                                }
                            }
                        }

                        if (_decideToScratch()) {
                            if (catHouse != null && catHouse.getId() != null && catHouse instanceof IScratchable && ((IScratchable) catHouse).getDurability() > 0) {
                                catHouse.setDurability(HomeStatsCalculator.calculateScratcherDurability(catHouse.getDurability(), Constants.DAMAGE));
                                catHouse.setImage(_calculateCorrectImage(catHouse));
                            } else {
                                pet.getStats().setMood(PetsStatsCalculator.calculateMoodAfterPetScratchingFail(currentMoodLevel, Constants.MOOD_DECREASE_AFTER_SCRATCHING_FAILED));
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

    private ScratcherImage _calculateCorrectImage(CatHouse catHouse) {
        Integer currentDurability = catHouse.getDurability();
        ScratcherImage scratcherImage = new ScratcherImage();
        String pathToImage = "";
        List<String> damagedImages = catHouse.getImage().getDamagedImages();
        String fullyDamagedImage = catHouse.getImage().getFullyDamagedImage();

        if (currentDurability == 0) {
            pathToImage = fullyDamagedImage;
        } else {
            int calculatedIndex = _calculateCorrectIndex(currentDurability, catHouse.getStepImageChange(), damagedImages.size() - 1);
            pathToImage = damagedImages.get(calculatedIndex);
        }
        scratcherImage.setCurrentImage(pathToImage);
        scratcherImage.setDamagedImages(damagedImages);
        scratcherImage.setFullyDamagedImage(fullyDamagedImage);

        return scratcherImage;
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

    private boolean _decideToScratch() {
        Random random = new Random();
        int chanceToScratch = random.nextInt(1000) + 1;

        return chanceToScratch <= 3;
    }

    private int _calculateCorrectIndex(Integer durability, Integer stepImageChange, int lastImageIndex) {
        return Math.min(durability / stepImageChange, lastImageIndex);
    }
}
