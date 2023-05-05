import React from 'react';
import { Button } from '@rneui/themed';
import { styles } from '../shop-list.styles';

export const CustomButton = ({ content, onPress }) => {
    return (
        <Button onPress={onPress} buttonStyle={styles.buttonStyle}>
            {content}
        </Button>
    );
};
