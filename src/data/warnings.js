export const warnings = {
    permissions: {
        text: 'If you want to receive notifications, you need to allow it in settings. And then restart the application.',
        hasButton: true,
    },
    osReboot: {
        text: 'For the correct functioning of the alarm after system reboot, some devices based on Custom Android (OEM - such as MUI, EMUI, etc.) versions, require adding this application to auto-start. The steps to access this setting are as follows:',
        device: {
            huawei: 'Settings -> Apps -> App Launch -> PetsOwnerSimulator -> Disable the "Manage automatically" option and ensure that the "Auto-launch" option is enabled.',
            xiaomi: 'Settings -> Apps -> Permissions -> Background AutoStart -> PetsOwnerSimulator -> Turn on the option.',
            otherwise:
                'If you are seeing this message, we do not know the settings path on your device. You need to find it in Settings. Try to type "autostart" in the search field.',
        },
        hasButton: false,
    },
};

export const knownDevices = ['huawei', 'xiaomi'];

export const withoutWarningDevices = ['google', 'samsung'];
