import React from 'react';
import { Image, View } from 'react-native';
import { Button } from '@rneui/themed';

import { CustomText } from '../custom-text/custom-text.component';

import { styles } from './first-user-experience.styles';

export const HelpItem = ({ item: helpItem, closeAllCards }) => {
    return (
        <View style={styles.card}>
            <View style={styles.helpTitleContainer}>
                <CustomText
                    text={helpItem.title}
                    style={[
                        styles.helpTitleText,
                        { fontSize: helpItem.title.length > 10 ? 20 : 40 },
                    ]}
                />
            </View>
            {helpItem.image !== 'none' && (
                <View style={styles.helpImageContainer}>
                    <Image
                        style={styles.helpImage}
                        source={{ uri: helpItem.image }}
                    />
                </View>
            )}
            <View style={styles.helpDescriptionContainer}>
                <CustomText
                    text={helpItem.description}
                    style={styles.helpDescriptionText}
                />
            </View>

            <Button
                containerStyle={{
                    alignSelf: 'center',
                }}
                title="Close All cards"
                onPress={closeAllCards}
            />
        </View>
    );
};
