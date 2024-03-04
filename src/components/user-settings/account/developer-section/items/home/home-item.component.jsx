import React from 'react';
import { Pressable, View } from 'react-native';
import { Icon } from '../../../../../icon/icon.component';

import { JsonFilter } from '../../filter/json-filter.component';

import { useToggleButton } from '../../../../../../hooks/common/useToggleButton.hook';
import { useJsonFilter } from '../../../../../../hooks/common/useJsonFilter.hook';

import useOwnerStore from '../../../../../../app/useOwnerStore';

import { Constants } from '../../../../../../constants/constants';

import { styles } from '../../developer-section.styles';
import { ItemView } from '../item-view.component';
import { HomeDetails } from '../../views/home/home-details.component';
import { HomeInfo } from '../../views/home/home-info.component';

export const HomeItem = () => {
    const {
        home: { livingRoom },
    } = useOwnerStore(state => state);

    const {
        props: homeProps,
        toggleProp: homeToggleProp,
        uniqueJsonProps: homeUniqueJsonProps,
    } = useJsonFilter(livingRoom);

    const { isExpanded: isJson, toggle: toggleJson } = useToggleButton();

    return (
        <>
            <View style={styles.controlContainer}>
                <View
                    style={{
                        flex: 1,
                        alignItems: !isJson ? 'center' : 'flex-start',
                    }}
                >
                    <Pressable onPress={toggleJson} style={styles.jsonButton}>
                        <Icon
                            type={Constants.MATERIALCOMMUNITYICONS_ICON}
                            icon={`${
                                !isJson ? 'code-json' : 'format-list-text'
                            }`}
                            size={20}
                        />
                    </Pressable>
                </View>
                {isJson && (
                    <JsonFilter
                        props={homeProps}
                        toggleProp={homeToggleProp}
                        uniqueJsonProps={homeUniqueJsonProps}
                    />
                )}
            </View>
            <ItemView isJson={isJson}>
                <HomeInfo isJson={isJson} props={homeProps} />
            </ItemView>
        </>
    );
};
