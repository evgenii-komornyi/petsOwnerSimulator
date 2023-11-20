import React, { memo } from 'react';
import { View } from 'react-native';

import { Input } from '@rneui/themed';

import { CustomText } from '../../../custom-text/custom-text.component';

import { styles } from './notification.styles';

export const NotificationInput = memo(
    ({ value, maxAvailableLength, fieldDescription, onChange }) => {
        return (
            <View style={styles.fieldContainer}>
                <CustomText text={fieldDescription} style={styles.fieldTitle} />
                <Input
                    value={value}
                    maxLength={maxAvailableLength}
                    onChangeText={text => onChange(fieldDescription, text)}
                />
                <CustomText
                    text={`${value.length}/${maxAvailableLength}`}
                    style={styles.maxAvailableLength}
                />
            </View>
        );
    }
);
