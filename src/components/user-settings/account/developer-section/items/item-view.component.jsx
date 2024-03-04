import React from 'react';
import { View } from 'react-native';

export const ItemView = ({ children, isJson }) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: isJson ? 'column' : 'row',
            }}
        >
            {children}
        </View>
    );
};
