package com.sinovdeath.PetsOwnerSimulator.services.game;

import com.facebook.react.bridge.ReactApplicationContext;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;
import com.sinovdeath.PetsOwnerSimulator.Repositories.game.GameRepository;
import com.sinovdeath.PetsOwnerSimulator.Repositories.game.IGameRepository;

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
    public void read(String saveMoment) {
        Owner existingOwnerInDB = _gameRepository.loadFromDB();

        if (existingOwnerInDB == null) {
            Owner newOwner = new Owner(Generator.generateID(), "Owner");
            OwnerManager.setOwner(newOwner);
        } else {
            OwnerManager.setOwner(existingOwnerInDB);
        }
    }
}
