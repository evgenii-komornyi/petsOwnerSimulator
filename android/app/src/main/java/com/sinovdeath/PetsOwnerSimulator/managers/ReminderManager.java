package com.sinovdeath.PetsOwnerSimulator.managers;

import android.content.Context;

import com.google.android.exoplayer2.util.Log;
import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Alarm;
import com.sinovdeath.PetsOwnerSimulator.repositories.game.GameRepository;
import com.sinovdeath.PetsOwnerSimulator.repositories.game.IGameRepository;
import com.sinovdeath.PetsOwnerSimulator.services.alarm.AlarmService;
import com.sinovdeath.PetsOwnerSimulator.services.alarm.IAlarmService;

import java.util.List;

public class ReminderManager {
    public static void startAlarm(Context context) {
        IAlarmService alarmService = new AlarmService(context);
        Owner owner = _readOwnerFromDB(context);

        if (owner != null) {
            List<Alarm> alarms = owner.getSettings().getAlarms();
            if (!alarms.isEmpty()) {
                for (Alarm alarm : alarms) {
                    if (alarm.isAlarmActive()) {
                        alarmService.setAlarm(alarm.getId(), alarm.getHour(), alarm.getMinutes());
                    }
                }
            }
        }
    }

    private static Owner _readOwnerFromDB(Context context) {
        IGameRepository gameRepository = new GameRepository(context);

        return gameRepository.loadFromDB();
    }
}
