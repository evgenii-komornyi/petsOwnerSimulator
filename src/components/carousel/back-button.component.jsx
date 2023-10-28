import React from 'react';
import { useNavigate } from 'react-router-native';

import { Button } from '@rneui/themed';
import { Icon } from '../icon/icon.component';

import { Constants } from '../../constants/constants';

import { styles } from './carousel.styles';

export const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };

    return (
        <Button
            title="Not Now"
            buttonStyle={styles.button}
            titleStyle={styles.title}
            icon={
                <Icon
                    type={Constants.IONICONS_ICON}
                    icon="ios-arrow-undo-circle-outline"
                    size={30}
                    color={Constants.MAIN_COLOR}
                />
            }
            onPress={goBack}
        />
    );
};
