package com.sinovdeath.PetsOwnerSimulator.Repositories.game;

import android.content.Context;

import com.google.android.exoplayer2.util.Log;
import com.google.gson.*;
import com.google.gson.reflect.TypeToken;
import com.sinovdeath.PetsOwnerSimulator.constants.Constants;
import com.sinovdeath.PetsOwnerSimulator.deserializers.AnimalMapListDeserializer;
import com.sinovdeath.PetsOwnerSimulator.deserializers.InventoryDeserializer;
import com.sinovdeath.PetsOwnerSimulator.deserializers.ItemDeserializer;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Inventory;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.pet.Animal;
import com.sinovdeath.PetsOwnerSimulator.entities.items.Item;

import com.sinovdeath.PetsOwnerSimulator.managers.OwnerManager;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;

public class GameRepository implements IGameRepository {
    private final Context _context;

    public GameRepository(Context context) {
        this._context = context;
    }

    @Override
    public void saveToDB() {
        Owner currentOwner = OwnerManager.getCurrentOwner();
        if (currentOwner != null) {
            try {
                String ownerJson = new Gson().toJson(currentOwner);
                FileOutputStream fileOutputStream = _context.openFileOutput(Constants.DATABASE_NAME, Context.MODE_PRIVATE);
                fileOutputStream.write(ownerJson.getBytes());
                fileOutputStream.close();
            } catch (IOException e) {
                Log.e("GameRepository", "Error saving owner data to file: " + e.getMessage());
            }
        }
    }

    @Override
    public Owner loadFromDB() {
        return _readFile();
    }

    private Owner _readFile() {
        File file = new File(_context.getFilesDir(), Constants.DATABASE_NAME);

        if (file.exists()) {
            String fileContent = _buildStringFromFileContent(file);

            Gson gson = new GsonBuilder()
                    .registerTypeAdapter(new TypeToken<List<HashMap<String, Animal>>>(){}.getType(), new AnimalMapListDeserializer())
                    .registerTypeAdapter(Item.class, new ItemDeserializer())
                    .registerTypeAdapter(Inventory.class, new InventoryDeserializer())
                    .create();

            return gson.fromJson(fileContent, Owner.class);
        }

        return null;
    }

    private String _buildStringFromFileContent(File file) {
        StringBuilder stringBuilder = new StringBuilder();
        try {
            FileReader fileReader = new FileReader(file);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String line;

            while ((line = bufferedReader.readLine()) != null) {
                stringBuilder.append(line);
            }

            bufferedReader.close();
            fileReader.close();

        } catch (IOException ex) {
            Log.d("FileReaderMethod", ex.getMessage());
        }

        return stringBuilder.toString();
    }
}
