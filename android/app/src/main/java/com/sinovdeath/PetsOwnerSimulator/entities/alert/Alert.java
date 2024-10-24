package com.sinovdeath.PetsOwnerSimulator.entities.alert;

import androidx.annotation.NonNull;

public class Alert {
    private Sound sound;
    private Vibration vibration;

    public Sound getSound() {
        return sound;
    }
    public void setSound(Sound sound) {
        this.sound = sound;
    }

    public Vibration getVibration() {
        return vibration;
    }
    public void setVibration(Vibration vibration) {
        this.vibration = vibration;
    }

    @NonNull
    @Override
    public String toString() {
        return "Alert{" +
                "sound=" + sound +
                ", vibration=" + vibration +
                '}';
    }
}
