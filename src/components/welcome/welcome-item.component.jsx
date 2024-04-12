import React from 'react';
import { View, Image } from 'react-native';

import { CustomText } from '../custom-text/custom-text.component';

import { styles } from './welcome.styles';

export const WelcomeItem = ({ item: { title, description, animation } }) => {
    return (
        <View style={styles.card}>
            <View style={styles.titleContainer}>
                <Image style={styles.title} source={{ uri: title }} />
            </View>
            <View style={styles.animationContainer}>
                <Image style={styles.animation} source={{ uri: animation }} />
            </View>
            <View style={styles.helpDescriptionContainer}>
                <CustomText
                    text={description}
                    style={styles.helpDescriptionText}
                />
            </View>
        </View>
    );
};
