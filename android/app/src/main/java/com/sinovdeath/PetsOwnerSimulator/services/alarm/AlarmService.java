package com.sinovdeath.PetsOwnerSimulator.services.alarm;

import android.annotation.SuppressLint;
import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;

import androidx.annotation.RequiresApi;

import com.google.android.exoplayer2.util.Log;
import com.sinovdeath.PetsOwnerSimulator.receivers.AlarmReceiver;

import java.util.Calendar;

public class AlarmService implements IAlarmService {
    private Context _context;

    public AlarmService(Context _context) {
        this._context = _context;
    }

    @SuppressLint("ScheduleExactAlarm")
    @RequiresApi(api = Build.VERSION_CODES.M)
    public void setAlarm(int id, int hour, int minute) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR_OF_DAY, hour);
        calendar.set(Calendar.MINUTE, minute);

        if (calendar.getTimeInMillis() <= System.currentTimeMillis()) {
            calendar.add(Calendar.DAY_OF_MONTH, 1);
        }
        AlarmManager alarmManager = (AlarmManager) _context.getSystemService(_context.ALARM_SERVICE);

        Intent intent = new Intent(_context, AlarmReceiver.class);

        PendingIntent pendingIntent = PendingIntent.getBroadcast(_context, id, intent, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);

        alarmManager.setAlarmClock(
                new AlarmManager.AlarmClockInfo(calendar.getTimeInMillis(), pendingIntent),
                pendingIntent
        );
    }

    public void cancelAlarm(int id) {
        AlarmManager alarmManager = (AlarmManager) _context.getSystemService(_context.ALARM_SERVICE);
        Intent alarmIntent = new Intent(_context, AlarmReceiver.class);
        PendingIntent pendingIntent = PendingIntent.getBroadcast(_context, id, alarmIntent, PendingIntent.FLAG_CANCEL_CURRENT | PendingIntent.FLAG_IMMUTABLE);

        alarmManager.cancel(pendingIntent);
    }
}
