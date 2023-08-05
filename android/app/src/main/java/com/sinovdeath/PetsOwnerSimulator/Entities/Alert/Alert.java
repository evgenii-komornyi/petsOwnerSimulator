package com.sinovdeath.PetsOwnerSimulator.Entities.Alert;

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

    @Override
    public String toString() {
        return "Alert{" +
                "sound=" + sound +
                ", vibration=" + vibration +
                '}';
    }
}
