import React from 'react';
import { Pressable, View } from 'react-native';

import { Icon } from '../../icon/icon.component';

import useUserStore from '../../../app/useUserStore';

import { Constants } from '../../../constants/constants';
import { useNavigate } from 'react-router-native';
import useSettingsStore from '../../../app/useSettingsStore';

export const RightMenu = () => {
    const { isUserSettings, toggleMenu } = useUserStore(state => state);
    const { isSoundMuted, toggleSound } = useSettingsStore(state => state);
    const navigate = useNavigate();

    const toggleUserMenu = () => {
        toggleMenu();
        navigate(isUserSettings ? '/' : '/account');
    };

    const toggleSoundMuting = () => {
        toggleSound();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <Pressable
                onPress={toggleSoundMuting}
                style={({ pressed }) => [
                    {
                        padding: 2,
                        borderWidth: pressed ? 1 : 0,
                        borderColor: pressed ? 'white' : 'transparent',
                        borderRadius: 50,
                    },
                ]}
            >
                <Icon
                    type={Constants.IONICONS_ICON}
                    icon={
                        isSoundMuted
                            ? 'volume-mute-outline'
                            : 'volume-high-outline'
                    }
                    size={25}
                    color="white"
                />
            </Pressable>
            <Pressable
                onPress={toggleUserMenu}
                style={({ pressed }) => [
                    {
                        padding: 2,
                        borderWidth: pressed ? 1 : 0,
                        borderColor: pressed ? 'white' : 'transparent',
                        borderRadius: 50,
                    },
                    { marginLeft: 10 },
                ]}
            >
                <Icon
                    type={
                        isUserSettings
                            ? Constants.MATERIALICONS_ICON
                            : Constants.MATERIALCOMMUNITYICONS_ICON
                    }
                    icon={isUserSettings ? 'pets' : 'account-cog-outline'}
                    size={25}
                    color="white"
                />
            </Pressable>
        </View>
    );
};
