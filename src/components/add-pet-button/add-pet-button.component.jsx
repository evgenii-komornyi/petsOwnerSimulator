import React from 'react';
import { useNavigate } from 'react-router-native';
import { Button } from '@rneui/themed';

import useOwnerStore from '../../app/useOwnerStore';
import { useAdoptButton } from '../../hooks/logic/pets/useAdoptButton.hook';

import { Icon } from '../icon/icon.component';

import { Constants } from '../../constants/constants';

import { styles } from './add-pet-button.styles';

export const AddPetButton = () => {
    const navigate = useNavigate();
    const { pets } = useOwnerStore(state => state);
    const { showTitle } = useAdoptButton(pets);

    return (
        <Button
            title={showTitle()}
            buttonStyle={styles.button}
            titleStyle={styles.title}
            icon={
                <Icon
                    type={Constants.MATERIALCOMMUNITYICONS_ICON}
                    icon="paw-outline"
                    size={30}
                    color="white"
                />
            }
            disabled={pets.length >= Constants.MAX_AVAILABLE_PETS}
            onPress={() => navigate('/carousel')}
        />
    );
};
