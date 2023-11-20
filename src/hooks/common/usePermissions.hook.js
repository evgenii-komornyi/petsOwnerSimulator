import { useEffect, useState } from 'react';
import { check, PERMISSIONS } from 'react-native-permissions';

export const usePermissions = () => {
    const [permissionRequestResult, setPermissionRequestResult] = useState('');

    const checkPermissions = async () => {
        try {
            const result = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);

            setPermissionRequestResult(result);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        checkPermissions();
    }, []);

    return { permissionRequestResult, checkPermissions };
};
