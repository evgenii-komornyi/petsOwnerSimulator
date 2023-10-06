package com.sinovdeath.PetsOwnerSimulator.helpers.checkers;

import android.os.Build;

import androidx.annotation.RequiresApi;

import com.google.android.exoplayer2.util.Log;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;

import java.util.HashMap;
import java.util.List;

public class Checker {
    @RequiresApi(api = Build.VERSION_CODES.N)
    public static boolean IsEveryPetDead(List<HashMap<String, Animal>> pets) {
        boolean isPetsDead = false;

        if (!pets.isEmpty()) {
            isPetsDead = pets
                    .stream()
                    .flatMap(map -> map.values().stream())
                    .allMatch(pet -> pet.getStats().getHealth() == 0);
        }

        return isPetsDead;
    }
}
