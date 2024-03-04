import { JsonView } from './json-view.component';
import { PetDetails } from './pet-details.component';
import React from 'react';
import { View } from 'react-native';
import { styles } from '../../developer-section.styles';

export const PetInfo = ({ pet, isJson, props }) => {
    return (
        <View
            style={[
                styles.petContainer,
                {
                    width: isJson ? '100%' : '50%',
                },
            ]}
        >
            {!isJson ? (
                <PetDetails pet={pet} />
            ) : (
                <JsonView pet={pet} props={props} />
            )}
        </View>
    );
};
