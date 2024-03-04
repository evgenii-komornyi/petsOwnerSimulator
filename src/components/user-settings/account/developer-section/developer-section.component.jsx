import React, { useState } from 'react';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';
import { Icon } from '../../../icon/icon.component';
import { DebugSection } from './debug-section.component';

import { Constants } from '../../../../constants/constants';

import { styles } from '../account.styles';

export const DeveloperSection = () => {
    const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

    const toggle = () => {
        setIsAccordionExpanded(prev => !prev);
    };

    return (
        <View style={styles.developerSectionContainer}>
            <ListItem.Accordion
                content={
                    <>
                        <Icon
                            type={Constants.MATERIALCOMMUNITYICONS_ICON}
                            icon="code-tags"
                            size={25}
                        />
                        <ListItem.Content>
                            <ListItem.Title style={{ paddingHorizontal: 10 }}>
                                Developer section
                            </ListItem.Title>
                        </ListItem.Content>
                    </>
                }
                isExpanded={isAccordionExpanded}
                onPress={toggle}
            >
                <DebugSection />
            </ListItem.Accordion>
        </View>
    );
};
