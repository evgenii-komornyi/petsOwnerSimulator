import React from 'react';
import { usePermissions } from '../../../hooks/common/usePermissions.hook';
import { useWhitelist } from '../../../hooks/logic/settings/useWhitelist.hook';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { Notification } from './notification/notification.component';
import { TimePicker } from './time-picker/time-picker.component';
import { SystemInfo } from './system-info/system-info.component';
import { Warning } from './warning/warning.component';

import { styles } from './settings.styles';

export const Settings = () => {
    const { permissionRequestResult } = usePermissions();
    useWhitelist();

    return (
        <SafeAreaView>
            <ScrollView>
                <View
                    style={[
                        styles.container,
                        {
                            backgroundColor: `${
                                permissionRequestResult === 'denied'
                                    ? 'rgba(255,255,51, .2)'
                                    : 'none'
                            }`,
                        },
                    ]}
                >
                    {permissionRequestResult &&
                        permissionRequestResult === 'denied' && (
                            <Warning warningType="permissions" />
                        )}
                    <SystemInfo />
                    <Notification
                        isDisabled={permissionRequestResult === 'denied'}
                    />
                    <TimePicker
                        isDisabled={permissionRequestResult === 'denied'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
