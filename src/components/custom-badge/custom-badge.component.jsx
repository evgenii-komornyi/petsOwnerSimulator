import React from 'react';
import { Badge } from '@rneui/themed';

export const CustomBadge = ({
    isBadgeVisible,
    value,
    badgeStyle,
    containerStyle,
}) => {
    return (
        isBadgeVisible && (
            <Badge
                value={value}
                badgeStyle={badgeStyle}
                containerStyle={containerStyle}
            />
        )
    );
};
