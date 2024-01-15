package com.sinovdeath.PetsOwnerSimulator.deserializers;

import com.google.android.exoplayer2.util.Log;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.sinovdeath.PetsOwnerSimulator.entities.home.Image;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Carpet;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Poop;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Smell;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.Window;
import com.sinovdeath.PetsOwnerSimulator.entities.home.room.LivingRoom;
import com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher.CatHouse;
import com.sinovdeath.PetsOwnerSimulator.entities.items.litter_box.LitterBox;
import com.sinovdeath.PetsOwnerSimulator.entities.items.scratcher.Sofa;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.InteractToy;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.NonInteractToy;
import com.sinovdeath.PetsOwnerSimulator.entities.items.toy.Toy;
import com.sinovdeath.PetsOwnerSimulator.enums.ToyType;

import java.lang.reflect.Type;

public class LivingRoomDeserializer implements JsonDeserializer<LivingRoom> {
    @Override
    public LivingRoom deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
        JsonObject jsonObject = json.getAsJsonObject();
        Image roomImage = context.deserialize(jsonObject.get("image"), Image.class);
        String roomType = jsonObject.get("roomType").getAsString();
        LitterBox litterBox = context.deserialize(jsonObject.get("litterBox"), LitterBox.class);
        CatHouse catHouse = context.deserialize(jsonObject.get("catHouse"), CatHouse.class);
        Toy toy = _generateToyByType(context, jsonObject);
        Sofa sofa = context.deserialize(jsonObject.get("sofa"), Sofa.class);

        JsonElement isWindowOpen = jsonObject.get("isWindowOpen");
        JsonElement poopOnCarpetCount = jsonObject.get("poopOnCarpetCount");
        JsonElement smellCount = jsonObject.get("smell");

        Window window = new Window();
        Poop poop = new Poop();
        Smell smell = new Smell();
        LivingRoom livingRoom = new LivingRoom();

        if (
                isWindowOpen != null &&
                poopOnCarpetCount != null &&
                smellCount != null &&
                isWindowOpen.isJsonPrimitive() &&
                poopOnCarpetCount.isJsonPrimitive() &&
                smellCount.isJsonPrimitive()
        ) {
            window.setIsWindowOpen(isWindowOpen.getAsBoolean());
            poop.setPoopOnCarpetCount(poopOnCarpetCount.getAsInt());
            smell.setSmell(smellCount.getAsInt());
            livingRoom.setWindow(window);
            livingRoom.setPoop(poop);
            livingRoom.setSmell(smell);
        }

        JsonElement windowObjectElement = jsonObject.get("window");
        JsonElement poopObjectElement = jsonObject.get("poop");
        JsonElement smellObjectElement = jsonObject.get("smell");

        if (
                windowObjectElement != null &&
                poopObjectElement != null &&
                smellObjectElement != null
        ) {
            livingRoom.setWindow(context.deserialize(windowObjectElement, Window.class));
            livingRoom.setPoop(context.deserialize(poopObjectElement, Poop.class));
            livingRoom.setSmell(context.deserialize(smellObjectElement, Smell.class));
        }
//        Window window = context.deserialize(jsonObject.get("window"), Window.class);
//        Poop poop = context.deserialize(jsonObject.get("poop"), Poop.class);
//        Smell smell = context.deserialize(jsonObject.get("smell"), Smell.class);
        Carpet carpet = context.deserialize(jsonObject.get("carpet"), Carpet.class);

        livingRoom.setRoomType(roomType);
        livingRoom.setImage(roomImage);
        livingRoom.setCatHouse(catHouse != null && catHouse.getId() != null ? catHouse : null);
        livingRoom.setLitterBox(litterBox != null && litterBox.getId() != null ? litterBox : null);
        livingRoom.setToy(toy);
        livingRoom.setSofa(sofa);
        livingRoom.setCarpet(carpet);

        Log.d("livingRoomDeser", livingRoom.toString());
        Log.d("jsonObject", jsonObject.toString());

        return livingRoom;
    }

    private Toy _generateToyByType(JsonDeserializationContext context, JsonObject jsonObject) {
        Toy toy = null;
        JsonElement toyElement = jsonObject.get("toy");

        if (toyElement != null && !toyElement.isJsonNull()) {
            JsonObject toyObject = toyElement.getAsJsonObject();
            if (!toyObject.entrySet().isEmpty()) {
                String toyType = toyObject.get("toyType").getAsString();

                if (ToyType.NON_INTERACT.getToyType().equals(toyType)) {
                    toy = context.deserialize(jsonObject.get("toy"), NonInteractToy.class);
                } else if (ToyType.INTERACT.getToyType().equals(toyType)) {
                    toy = context.deserialize(jsonObject.get("toy"), InteractToy.class);
                }
            }
        }

        return toy;
    }
}
