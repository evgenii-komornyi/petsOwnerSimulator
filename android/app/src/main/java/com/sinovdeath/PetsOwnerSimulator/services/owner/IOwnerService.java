package com.sinovdeath.PetsOwnerSimulator.services.owner;

public interface IOwnerService {
    String increaseHappyPetCoins();
    String adoptPet(String petType, String petToAdopt);
    String feedPet(String petId, String itemId);
    String petPet(String petId, String swipeDirection);
    String sayGoodbye(String petId);
    String buyItem(String itemType, String itemToBuy);
    String interactWithWindow();
    String refillAndCleanBowl();
    String cleanRoom();
    String cleanLitterBox();
    String putItemInRoom(String itemType, String itemToPut);
    String changeAlarmTime(int alarmId, int alarmHours, int alarmMinutes);
    String changeAlarmActivity(int alarmId, boolean alarmActivityFlag);
    String saveNotification(String title, String body);
}
