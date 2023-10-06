import { ButtonGroup } from '@rneui/base';
import React, { useState } from 'react';
import { View } from 'react-native';

import { Icon } from '../icon/icon.component';
import { MealList } from '../../tabs/actions/meal/meal-list.tab';
import { PlayList } from '../../tabs/actions/play/play-list.tab';

import { Constants } from '../../constants/constants';

import { styles } from './actions.styles';

export const Actions = ({ petId }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const buttons = [
        <Icon
            type={Constants.IONICONS_ICON}
            icon="md-restaurant-outline"
            size={Constants.MEDIUM_ICON_SIZE}
            color="white"
        />,
        <Icon
            type={Constants.IONICONS_ICON}
            icon="md-baseball-outline"
            size={Constants.MEDIUM_ICON_SIZE}
            color="white"
        />,
    ];

    const renderComponents = () => {
        switch (selectedIndex) {
            case 0:
                return <MealList petId={petId} />;
            case 1:
                return <PlayList petId={petId} />;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.componentContainer}>{renderComponents()}</View>
            <ButtonGroup
                buttons={buttons}
                selectedIndex={selectedIndex}
                buttonContainerStyle={styles.buttonContainer}
                selectedButtonStyle={styles.selectedButton}
                onPress={value => {
                    setSelectedIndex(value);
                }}
            />
        </View>
    );
};
