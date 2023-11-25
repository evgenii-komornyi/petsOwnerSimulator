package com.sinovdeath.PetsOwnerSimulator.enums;

import com.sinovdeath.PetsOwnerSimulator.R;

public enum NotificationSound {
    ALARM(R.raw.sad);

    private int sound;

    NotificationSound(int sound) {
        this.sound = sound;
    }

    public int getSound() {
        return sound;
    }
}
