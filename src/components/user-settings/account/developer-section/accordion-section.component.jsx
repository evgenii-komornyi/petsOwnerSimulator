import React from 'react';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';

import { CustomText } from '../../../custom-text/custom-text.component';
import { PetsItem } from './items/pets/pets-item.component';
import { HomeItem } from './items/home/home-item.component';

import { useToggleButton } from '../../../../hooks/common/useToggleButton.hook';

import useOwnerStore from '../../../../app/useOwnerStore';

import { styles } from './developer-section.styles';

export const AccordionSection = () => {
    const { pets } = useOwnerStore(state => state);

    const { isExpanded: petsExpanded, toggle: togglePets } = useToggleButton();
    const { isExpanded: homeExpanded, toggle: toggleHome } = useToggleButton();

    return (
        <>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title style={{ alignContent: 'center' }}>
                            <View style={styles.accordionSectionTitleContainer}>
                                <CustomText
                                    text="Pets"
                                    style={styles.accordionSectionTitle}
                                />
                                <CustomText text={`   Count: ${pets.length}`} />
                            </View>
                        </ListItem.Title>
                    </ListItem.Content>
                }
                isExpanded={petsExpanded}
                onPress={togglePets}
            >
                <PetsItem />
            </ListItem.Accordion>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title style={{ alignContent: 'center' }}>
                            <View style={styles.accordionSectionTitleContainer}>
                                <CustomText
                                    text="Home"
                                    style={styles.accordionSectionTitle}
                                />
                            </View>
                        </ListItem.Title>
                    </ListItem.Content>
                }
                isExpanded={homeExpanded}
                onPress={toggleHome}
            >
                <HomeItem />
            </ListItem.Accordion>
        </>
    );
};
