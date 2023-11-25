package com.sinovdeath.PetsOwnerSimulator.receivers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;

import androidx.annotation.RequiresApi;

import com.sinovdeath.PetsOwnerSimulator.entities.owner.Owner;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Alarm;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Notification;
import com.sinovdeath.PetsOwnerSimulator.entities.settings.Settings;
import com.sinovdeath.PetsOwnerSimulator.enums.NotificationIcon;
import com.sinovdeath.PetsOwnerSimulator.enums.NotificationSound;
import com.sinovdeath.PetsOwnerSimulator.helpers.generators.Generator;
import com.sinovdeath.PetsOwnerSimulator.managers.ReminderManager;
import com.sinovdeath.PetsOwnerSimulator.repositories.game.GameRepository;
import com.sinovdeath.PetsOwnerSimulator.repositories.game.IGameRepository;
import com.sinovdeath.PetsOwnerSimulator.services.notifications.INotificationService;
import com.sinovdeath.PetsOwnerSimulator.services.notifications.NotificationService;

import java.util.Calendar;
import java.util.List;

public class AlarmReceiver extends BroadcastReceiver {
    @RequiresApi(api = Build.VERSION_CODES.N)
    @Override
    public void onReceive(Context context, Intent intent) {
        IGameRepository repository = new GameRepository(context);
        Owner owner = repository.loadFromDB();

        if (owner != null) {
            Settings settings = owner.getSettings();
            Notification notification = settings.getFeedingNotification();
            List<Alarm> alarms = settings.getAlarms();

            INotificationService notificationService = new NotificationService(context);
            if (_isInPresent(alarms)) {
                notificationService.notify(notification.getTitle(), notification.getBody(), Generator.getIconID(context, NotificationIcon.ALARM.getIcon()), NotificationSound.ALARM.getSound());
            }
        }

        ReminderManager.startAlarm(context);
    }

    @RequiresApi(api = Build.VERSION_CODES.N)
    private boolean _isInPresent(List<Alarm> alarms) {
        return alarms.stream().anyMatch(alarm -> {
            Calendar alarmTime = Calendar.getInstance();
            alarmTime.set(Calendar.HOUR_OF_DAY, alarm.getHour());
            alarmTime.set(Calendar.MINUTE, alarm.getMinutes());
            int alarmHours = alarmTime.get(Calendar.HOUR_OF_DAY);
            int alarmMinutes = alarmTime.get(Calendar.MINUTE);

            Calendar now = Calendar.getInstance();
            int currentHours = now.get(Calendar.HOUR_OF_DAY);
            int currentMinutes = now.get(Calendar.MINUTE);

            return currentHours == alarmHours && currentMinutes == alarmMinutes;
        });
    }
}
