import React from 'react';
import { View } from 'react-native';

import { HomeDetails } from './home-details.component';
import { JsonView } from './json-view.component';

import useOwnerStore from '../../../../../../app/useOwnerStore';

import { styles } from '../../developer-section.styles';

export const HomeInfo = ({ isJson, props }) => {
    const {
        home: { livingRoom },
    } = useOwnerStore(state => state);

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
                <HomeDetails />
            ) : (
                <JsonView livingRoom={livingRoom} props={props} />
            )}
        </View>
    );
};
