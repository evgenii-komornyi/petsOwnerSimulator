import React from 'react';
import { ScrollView } from 'react-native';

import { CustomText } from '../custom-text/custom-text.component';

import { styles } from './pets.styles';

export const NoPets = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator
            contentContainerStyle={styles.textContainer}
        >
            <CustomText
                text="Welcome to the pets’ owner simulator. Here you can take care of the animals. As long as they are happy with you, you will get hpc (happy pets coins) to buy food and toys. But be careful – if you do not care of your pets well enough, shelter employees take them away to a better home. The game ends if you have no pets left."
                style={[styles.emptyPetsText, { marginBottom: 10 }]}
            />
            <CustomText
                text="As we are deeply concerned about how people sometimes are treating the animals, we decided to only offer pets from a shelter. You can read the story of every pet on the back of an adoption card (press to view). The stories are made up, but they are rather close to what really happens."
                style={styles.emptyPetsText}
            />
        </ScrollView>
    );
};
