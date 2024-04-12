import React from 'react';
import { View } from 'react-native';

import { AddPetButton } from '../add-pet-button/add-pet-button.component';

import { Welcome } from '../welcome/welcome.component';
import { FirstUserExperience } from '../../components/first-user-experience/first-user-experience.component';

import { useHelpByVersion } from '../../hooks/common/help/useHelpByVersion.hook';
import { useRenderPets } from '../../hooks/logic/renders/useRenderPets.hook';

import useSettingsStore from '../../app/useSettingsStore';

import { styles } from './pets.styles';

export const Pets = () => {
    const { isFirstRun } = useSettingsStore(state => state);

    const {
        filteredHelpByVersion,
        currentOwnerVersion,
        oldOwnerVersion,
        resetFilteredHelp,
    } = useHelpByVersion();
    const { renderPetsComponent } = useRenderPets();

    return (
        <>
            <View style={styles.wrapperContainer}>
                {renderPetsComponent()}
                {isFirstRun && <Welcome />}
                {oldOwnerVersion !== null &&
                currentOwnerVersion > oldOwnerVersion &&
                filteredHelpByVersion.length > 0 ? (
                    <FirstUserExperience
                        collection={filteredHelpByVersion}
                        resetFilteredHelp={resetFilteredHelp}
                    />
                ) : null}
            </View>
            <View style={styles.buttonContainer}>
                <AddPetButton />
            </View>
        </>
    );
};
