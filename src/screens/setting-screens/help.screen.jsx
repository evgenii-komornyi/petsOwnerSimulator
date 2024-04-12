import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import { useOnBackPress } from '../../hooks/common/useOnBackPress.hook';
import useSettingsStore from '../../app/useSettingsStore';

import { Help } from '../../components/user-settings/help/help.component';
import { FirstUserExperience } from '../../components/first-user-experience/first-user-experience.component';

import { styles } from '../../styles/global.styles';

export const HelpScreen = () => {
    useOnBackPress();

    const { filteredHelp: compiledHelpItems, resetFilteredHelp } =
        useSettingsStore(state => state);

    useEffect(() => {
        return () => resetFilteredHelp();
    }, []);

    const [isScrollable, setIsScrollable] = useState(true);

    const handleTouchStart = () => {
        setIsScrollable(false);
    };

    const handleTouchEnd = () => {
        setIsScrollable(true);
    };

    return (
        <View style={styles.container}>
            <Help
                disableScroll={handleTouchStart}
                scrollEnabled={isScrollable}
            />

            {compiledHelpItems && compiledHelpItems.length > 0 ? (
                <FirstUserExperience
                    resetFilteredHelp={resetFilteredHelp}
                    handleTouchEnd={handleTouchEnd}
                    collection={compiledHelpItems}
                />
            ) : null}
        </View>
    );
};
