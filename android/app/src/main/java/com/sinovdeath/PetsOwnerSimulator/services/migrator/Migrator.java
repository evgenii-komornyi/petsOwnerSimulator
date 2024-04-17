package com.sinovdeath.PetsOwnerSimulator.services.migrator;

import android.os.Build;

import androidx.annotation.RequiresApi;

import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;

public class Migrator implements IMigrator {
    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public Owner migrateOwnerByVersion(Owner currentOwner) {
        String version = currentOwner.getVersion();

        if (version.equals("1.7")) {
            currentOwner.setVersion("1.8");
        }

        version = currentOwner.getVersion();

        return currentOwner;
    }
}
