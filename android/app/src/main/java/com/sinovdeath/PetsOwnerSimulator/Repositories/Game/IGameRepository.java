package com.sinovdeath.PetsOwnerSimulator.Repositories.Game;

import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;

public interface IGameRepository {
    void saveToDB();
    Owner loadFromDB();
}
