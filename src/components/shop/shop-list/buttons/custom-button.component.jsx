import React from 'react';
import { Button } from '@rneui/themed';
import { styles } from '../shop-list.styles';
import { Constants } from '../../../../constants/constants';

export const CustomButton = ({ content, onPress, disabled }) => {
    return (
        <Button
            onPress={onPress}
            buttonStyle={styles.buttonStyle}
            disabled={disabled}
            titleStyle={{ color: Constants.MAIN_COLOR, marginTop: -2 }}
        >
            {content}
        </Button>
    );
};
