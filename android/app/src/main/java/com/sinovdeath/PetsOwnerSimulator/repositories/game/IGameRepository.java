package com.sinovdeath.PetsOwnerSimulator.repositories.game;

import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;

public interface IGameRepository {
    void saveToDB();
    Owner loadFromDB();
}
