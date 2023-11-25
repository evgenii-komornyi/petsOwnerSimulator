package com.sinovdeath.PetsOwnerSimulator.services.notifications;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.ContentResolver;
import android.content.Context;
import android.content.Intent;
import android.media.AudioAttributes;
import android.net.Uri;
import android.os.Build;

import androidx.annotation.RequiresApi;
import androidx.core.app.NotificationCompat;

import com.sinovdeath.PetsOwnerSimulator.MainActivity;

public class NotificationService implements INotificationService {
    private final Context _context;

    public NotificationService(Context context) {
        _context = context;
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    public void notify(String title, String text, int iconId, int soundId) {
        String channelId = "channel_notification";
        CharSequence channelName = "Notification channel";
        int importance = NotificationManager.IMPORTANCE_DEFAULT;

        NotificationManager notificationManager = _context.getSystemService(NotificationManager.class);
        NotificationChannel channel = null;

        Intent notifyIntent = new Intent(_context, MainActivity.class);
        notifyIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK
                | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        PendingIntent notifyPendingIntent = PendingIntent.getActivity(
                _context, 0, notifyIntent,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
        );

        AudioAttributes audioAttributes = new AudioAttributes.Builder()
                .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                .setUsage(AudioAttributes.USAGE_NOTIFICATION)
                .build();

        NotificationCompat.Builder builder = new NotificationCompat.Builder(_context, channelId)
                .setSmallIcon(iconId)
                .setContentTitle(title)
                .setContentText(text)
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)
                .setContentIntent(notifyPendingIntent)
                .setAutoCancel(true);

        channel = new NotificationChannel(channelId, channelName, importance);
        channel.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);

        if (soundId != -1) {
            Uri sound = Uri.parse(ContentResolver.SCHEME_ANDROID_RESOURCE + "://" + _context.getPackageName() + "/" + soundId);
            builder.setSound(sound);
            channel.setSound(sound, audioAttributes);
        }

        notificationManager.createNotificationChannel(channel);
        notificationManager.notify(1, builder.build());
    }
}
