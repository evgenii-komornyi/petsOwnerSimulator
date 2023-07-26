package com.sinovdeath.PetsOwnerSimulator.Services.Game;

import com.facebook.react.bridge.ReactApplicationContext;
import com.sinovdeath.PetsOwnerSimulator.Entities.Owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.Helpers.Generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.Managers.OwnerManager;
import com.sinovdeath.PetsOwnerSimulator.Repositories.Game.GameRepository;
import com.sinovdeath.PetsOwnerSimulator.Repositories.Game.IGameRepository;

public class GameService implements IGameService {
    private final ReactApplicationContext _context;
    private final IGameRepository _gameRepository;

    public GameService(ReactApplicationContext context) {
        this._context = context;
        this._gameRepository = new GameRepository(_context);
    }
    @Override
    public void write() {
        _gameRepository.saveToDB();
    }

    @Override
    public void read() {
        Owner existingOwnerInDB = _gameRepository.loadFromDB();

        if (existingOwnerInDB == null) {
            Owner newOwner = new Owner(Generator.generateID(), "Owner");
            OwnerManager.setOwner(newOwner);
        } else {
            OwnerManager.setOwner(existingOwnerInDB);
        }
    }
}
