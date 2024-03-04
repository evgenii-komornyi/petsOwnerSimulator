import React from 'react';
import { View } from 'react-native';
import { ListItem } from '@rneui/themed';
import { CustomText } from '../../../../../custom-text/custom-text.component';
import { useToggleButton } from '../../../../../../hooks/common/useToggleButton.hook';
import { useJsonView } from '../../../../../../hooks/common/json-view/useJsonView.hook';

export const JsonView = ({ pet, props }) => {
    const { replacer } = useJsonView(props);
    const { isExpanded, toggle } = useToggleButton();

    return (
        <View style={{ flex: 1, width: '100%' }}>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title style={{ paddingHorizontal: 10 }}>
                            {pet.name}
                        </ListItem.Title>
                    </ListItem.Content>
                }
                isExpanded={isExpanded}
                onPress={toggle}
            >
                <CustomText
                    text={JSON.stringify(pet, replacer, 4)}
                    style={{ fontSize: 12 }}
                />
            </ListItem.Accordion>
        </View>
    );
};
