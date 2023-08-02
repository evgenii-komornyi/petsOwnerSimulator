package com.sinovdeath.PetsOwnerSimulator.Helpers.Calculators;

import com.sinovdeath.PetsOwnerSimulator.Constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Food.Food;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.ICountable;
import com.sinovdeath.PetsOwnerSimulator.Entities.Items.Item;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.Entities.Pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.Entities.Stats.Stats;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;

public class Calculator {
    public static BigDecimal calculateHappyPetCoins(Owner owner, Item item) {
        BigDecimal itemPrice = new BigDecimal(item.getPrice().toString());

        if (item instanceof ICountable) {
            BigDecimal itemCount = BigDecimal.valueOf(((ICountable) item).getCount());

            return owner.getHappyPetCoins().subtract(itemPrice.multiply(itemCount));
        } else {
            return owner.getHappyPetCoins().subtract(itemPrice);
        }
    }

    public static BigDecimal increaseHappyPetCoins(BigDecimal currentHPC) {
        return currentHPC.add(new BigDecimal(Constants.HPC_INCREMENT_VALUE));
    }

    public static void calculatePetsInFeedingTime(List<HashMap<String, Animal>> pets, String petId, Food foodToFeedPet) {
        for (HashMap<String, Animal> petMap : pets) {
            Animal pet = petMap.get(petId);
            if (pet != null) {
                Stats currentPetStats = pet.getStats();
                int currentPetSatiety = currentPetStats.getSatiety();

                if (foodToFeedPet != null) {
                    currentPetStats.setSatiety(PetsStatsCalculator.increaseSatietyAfterFeeding(currentPetSatiety, foodToFeedPet.getSatisfaction()));
                    currentPetStats.setDigestion(pet.getStatsIncreasing().getSatiety());
                }
            }
        }
    }

    public static Food calculateFoodCountAfterFeeding(List<Item> food, String itemId) {
        Food foodToFeedPet = null;
        for (Item item : food) {
            if (item.getId().equals(itemId)) {
                foodToFeedPet = (Food) item;

                if (item instanceof ICountable) {
                    ICountable countableItem = (ICountable) item;
                    countableItem.setCount(ItemsCalculator.decreaseFoodCountInFeedingTime(countableItem.getCount(), 1));
                }
            }
        }

        return foodToFeedPet;
    }
}
