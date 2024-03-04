import React, { Fragment } from 'react';
import { Pressable, View } from 'react-native';

import { PetInfo } from '../../views/pet/pet-info.component';
import { CustomText } from '../../../../../custom-text/custom-text.component';
import { Icon } from '../../../../../icon/icon.component';
import { ItemView } from '../item-view.component';

import useOwnerStore from '../../../../../../app/useOwnerStore';
import { useToggleButton } from '../../../../../../hooks/common/useToggleButton.hook';
import { JsonFilter } from '../../filter/json-filter.component';
import { useJsonFilter } from '../../../../../../hooks/common/useJsonFilter.hook';

import { Constants } from '../../../../../../constants/constants';

import { styles } from '../../developer-section.styles';

export const PetsItem = () => {
    const { pets } = useOwnerStore(state => state);

    const {
        props: petsProps,
        toggleProp: petsToggleProp,
        uniqueJsonProps: petsUniqueJsonProps,
    } = useJsonFilter(pets);

    const { isExpanded: isJson, toggle: toggleJson } = useToggleButton();

    return pets.length > 0 ? (
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
                        props={petsProps}
                        toggleProp={petsToggleProp}
                        uniqueJsonProps={petsUniqueJsonProps}
                    />
                )}
            </View>
            <ItemView isJson={isJson}>
                {pets.map(pet => (
                    <Fragment key={pet.id}>
                        <PetInfo pet={pet} isJson={isJson} props={petsProps} />
                    </Fragment>
                ))}
            </ItemView>
        </>
    ) : (
        <CustomText text="You do not have any pets!" />
    );
};
