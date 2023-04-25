import React from 'react';
import { Button } from '@rneui/themed';

export const CustomButton = ({ content, onPress }) => {
    return <Button onPress={onPress}>{content}</Button>;
};
