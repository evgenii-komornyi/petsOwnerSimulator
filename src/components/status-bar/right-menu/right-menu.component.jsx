import React from 'react';
import { Pressable } from 'react-native';

import { Icon } from '../../icon/icon.component';

import useUserStore from '../../../app/useUserStore';

import { Constants } from '../../../constants/constants';
import { useNavigate } from 'react-router-native';

export const RightMenu = () => {
    const { isUserSettings, toggleMenu } = useUserStore(state => state);
    const navigate = useNavigate();

    const toggle = () => {
        toggleMenu();
        navigate(isUserSettings ? '/' : '/settings');
    };

    return (
        <Pressable
            onPress={toggle}
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
    );
};
