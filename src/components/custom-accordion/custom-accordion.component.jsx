import React from 'react';
import { Pressable, View } from 'react-native';
import { ListItem } from '@rneui/base';
import { CustomText } from '../custom-text/custom-text.component';
import { useHelp } from '../../hooks/logic/settings/useHelp.hook';
import { styles } from '../user-settings/help/help.styles';

export const CustomAccordion = ({
    children,
    title,
    id,
    isButton,
    disableScroll,
}) => {
    const { checkStartsWith, toggleAccordion, isExpanded, compileArrayByTag } =
        useHelp();

    const openCards = title => {
        compileArrayByTag(title);
        disableScroll();
    };

    return (
        <View>
            <ListItem.Accordion
                content={
                    <ListItem.Content>
                        <ListItem.Title style={{ alignContent: 'center' }}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                {isButton ? (
                                    <Pressable
                                        style={({ pressed }) => [
                                            pressed
                                                ? styles.pressedStyle
                                                : styles.unpressedStyle,
                                            styles.itemContainer,
                                            {
                                                marginLeft: checkStartsWith(id)
                                                    ? 50
                                                    : 0,
                                            },
                                        ]}
                                        onPress={() => openCards(title)}
                                    >
                                        <CustomText
                                            text={title}
                                            style={{
                                                fontWeight: !checkStartsWith(id)
                                                    ? 'bold'
                                                    : 'normal',
                                                fontSize: !checkStartsWith(id)
                                                    ? 20
                                                    : 15,
                                            }}
                                        />
                                    </Pressable>
                                ) : (
                                    <CustomText
                                        text={title}
                                        style={{
                                            fontWeight: !checkStartsWith(id)
                                                ? 'bold'
                                                : 'normal',
                                            fontSize: !checkStartsWith(id)
                                                ? 20
                                                : 15,
                                        }}
                                    />
                                )}
                            </View>
                        </ListItem.Title>
                    </ListItem.Content>
                }
                isExpanded={isExpanded.includes(id)}
                onPress={() => toggleAccordion(id)}
            >
                {children}
            </ListItem.Accordion>
        </View>
    );
};
