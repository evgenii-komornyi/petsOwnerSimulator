package com.sinovdeath.PetsOwnerSimulator.services.migrator;

import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;

public interface IMigrator {
    Owner migrateOwnerByVersion(Owner currentOwner);
}
