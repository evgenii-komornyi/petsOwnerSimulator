import React from 'react';
import { View } from 'react-native';
import { CustomText } from '../../../custom-text/custom-text.component';

import useOwnerStore from '../../../../app/useOwnerStore';

import { styles } from '../account.styles';
import { SettingsTitle } from '../../settings-title.component';
import useSettingsStore from '../../../../app/useSettingsStore';

export const OwnerInfo = () => {
    const { name, version } = useOwnerStore(state => state);
    const { isSoundMuted, isAccordionExpanded } = useSettingsStore(
        state => state
    );

    return (
        <View style={styles.ownerInfoContainer}>
            <SettingsTitle title="Owner information" />
            <CustomText text={`Name: ${name}.`} />
            <CustomText text={`Version: ${version}.`} />
            <CustomText text={`Muted: ${isSoundMuted}.`} />
            <CustomText text={`Expanded warning: ${isAccordionExpanded}.`} />
        </View>
    );
};
