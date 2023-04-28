import React from 'react';
import { View } from 'react-native';

import { CustomText } from '../custom-text/custom-text.component';

import useOwnerStore from '../../app/useOwnerStore';

import { styles } from './farewell.styles';
import { Button } from '@rneui/themed';

export const Farewell = ({ id, name }) => {
    const { sayGoodbye } = useOwnerStore();

    return (
        <View style={styles.farewellContainer}>
            <CustomText
                text={`${name} has been taken to the shelter.`}
                style={styles.farewellText}
            />
            <Button
                title="Say goodbye"
                type="outline"
                buttonStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitle}
                onPress={() => sayGoodbye(id)}
            />
        </View>
    );
};
