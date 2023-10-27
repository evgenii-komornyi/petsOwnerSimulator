import React from 'react';
import { useNavigate } from 'react-router-native';
import { Image, View } from 'react-native';
import { Button } from '@rneui/themed';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './sides.styles';
import { Icon } from '../../icon/icon.component';
import { Constants } from '../../../constants/constants';

export const FrontSide = ({ type, item: pet }) => {
    const navigate = useNavigate();
    const { adoptPet } = useOwnerStore(state => state);

    const adopt = async () => {
        await adoptPet(type, pet);
        navigate('/');
    };

    return (
        <View style={styles.cardFront}>
            {/* <Icon
                type={Constants.SIMPLELINESICONS_ICON}
                icon="info"
                size={30}
            /> */}
            <Image
                source={{
                    uri: pet.img.regular,
                }}
                style={styles.image}
            />
            <Button title={`Adopt ${pet.name}`} onPress={adopt} />
        </View>
    );
};
