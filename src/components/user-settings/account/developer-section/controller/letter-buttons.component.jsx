import React from 'react';

import { styles } from './joystick.styles';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from '../../../../custom-text/custom-text.component';

export const LetterButtons = ({
    keys: {
        letters: { topKeys, bottomKeys },
    },
    onPressKeyHandler,
}) => {
    return (
        <View style={styles.lettersContainer}>
            <View style={[styles.rowContainer, { paddingTop: 10 }]}>
                {topKeys.map((key, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => onPressKeyHandler(key)}
                        style={[styles.button, styles.topButtons]}
                    >
                        <CustomText
                            text={key}
                            style={{ fontSize: 18, fontWeight: 'bold' }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.rowContainer}>
                {bottomKeys.map((key, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => onPressKeyHandler(key)}
                        style={[styles.button, styles.bottomButtons]}
                    >
                        <CustomText
                            text={key.toUpperCase()}
                            style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: 'rgba(255, 255, 255, .2)',
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};
