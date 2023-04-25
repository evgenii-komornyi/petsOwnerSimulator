import React from 'react';

import { CustomText } from '../../../../custom-text/custom-text.component';

import { styles } from './door.styles';

export const Door = () => {
    return <CustomText text="" style={{ transform: [{ rotate: '-90deg' }] }} />;
};
