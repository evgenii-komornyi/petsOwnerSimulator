import { Vibration } from 'react-native';

export const useVibrate = () => {
    const vibrate = (duration = 100) => {
        if (duration === 100) {
            Vibration.vibrate();
        } else {
            Vibration.vibrate(duration * 1000);
        }
    };

    return [vibrate];
};
