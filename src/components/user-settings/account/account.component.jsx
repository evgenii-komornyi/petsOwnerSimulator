import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { OwnerInfo } from './owner-info/owner-info.component';
import { DeveloperSection } from './developer-section/developer-section.component';
import { DangerZone } from './danger-zone/danger-zone.component';

import { styles } from './account.styles';

export const Account = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <OwnerInfo />
                    <DeveloperSection />
                    <DangerZone />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
