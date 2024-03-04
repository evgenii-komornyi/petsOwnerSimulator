import React from 'react';
import { View } from 'react-native';

import { AccordionSection } from './accordion-section.component';

import { styles } from './developer-section.styles';

export const DebugSection = () => {
    return (
        <View style={styles.debugSectionContainer}>
            <AccordionSection />
        </View>
    );
};
