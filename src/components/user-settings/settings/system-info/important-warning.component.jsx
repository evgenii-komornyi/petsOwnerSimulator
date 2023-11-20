import React from 'react';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';

import useSettingsStore from '../../../../app/useSettingsStore';

import { Icon } from '../../../icon/icon.component';

import { Constants } from '../../../../constants/constants';

import { styles } from './system-info.styles';
import { Warning } from '../warning/warning.component';

export const ImportantWarning = () => {
    const { toggleAccordion, isAccordionExpanded } = useSettingsStore(
        state => state
    );

    const toggle = () => {
        toggleAccordion();
    };

    return (
        <View style={styles.importantWarningContainer}>
            <ListItem.Accordion
                content={
                    <>
                        <Icon
                            type={Constants.MATERIALCOMMUNITYICONS_ICON}
                            icon="alert-rhombus-outline"
                            size={30}
                        />
                        <ListItem.Content>
                            <ListItem.Title>
                                Important information
                            </ListItem.Title>
                        </ListItem.Content>
                    </>
                }
                isExpanded={isAccordionExpanded}
                onPress={toggle}
            >
                <Warning warningType="osReboot" />
            </ListItem.Accordion>
        </View>
    );
};
