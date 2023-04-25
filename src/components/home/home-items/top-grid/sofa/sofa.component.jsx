import React from 'react';
import { View, ImageBackground } from 'react-native';

import { styles } from './sofa.styles';

const sofa = { uri: 'asset:/images/home-items/sofa.png' };

export const Sofa = () => {
    return (
        <View style={[styles.sofaContainer]}>
            <ImageBackground
                source={sofa}
                resizeMode="contain"
                style={styles.sofaImage}
            ></ImageBackground>
        </View>
    );
};
