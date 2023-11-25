package com.sinovdeath.PetsOwnerSimulator.receivers;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

import com.sinovdeath.PetsOwnerSimulator.managers.ReminderManager;

public class BootReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent.getAction().equals(Intent.ACTION_BOOT_COMPLETED) ||
                intent.getAction().equals(Intent.ACTION_REBOOT)) {
            ReminderManager.startAlarm(context);
            Toast.makeText(context, "Alarms Set", Toast.LENGTH_SHORT).show();
        }
    }
}
