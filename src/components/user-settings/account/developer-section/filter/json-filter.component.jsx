import React from 'react';
import { View } from 'react-native';
import { Chip, ListItem } from '@rneui/themed';

import { useToggleButton } from '../../../../../hooks/common/useToggleButton.hook';

export const JsonFilter = ({ props, toggleProp, uniqueJsonProps }) => {
    const { isExpanded, toggle } = useToggleButton();

    return (
        <View style={{ flex: 4, width: '100%' }}>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title style={{ paddingHorizontal: 10 }}>
                            Json fields
                        </ListItem.Title>
                    </ListItem.Content>
                }
                isExpanded={isExpanded}
                onPress={toggle}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >
                    {[...uniqueJsonProps].map((prop, index) => {
                        return (
                            <View
                                style={{
                                    flexBasis: '50%',
                                    paddingHorizontal: 8,
                                    marginBottom: 15,
                                }}
                                key={index}
                            >
                                <Chip
                                    title={prop}
                                    type={
                                        props[index].isActive
                                            ? 'solid'
                                            : 'outline'
                                    }
                                    titleStyle={{
                                        color: 'black',
                                    }}
                                    containerStyle={{
                                        borderWidth: 2,
                                        borderColor: 'black',
                                        marginVertical: 5,
                                    }}
                                    onPress={() => toggleProp(prop)}
                                />
                            </View>
                        );
                    })}
                </View>
            </ListItem.Accordion>
        </View>
    );
};
