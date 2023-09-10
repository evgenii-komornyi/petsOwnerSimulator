import React, { Fragment } from 'react';
import { View } from 'react-native';

import { EmptyList } from '../../../components/empy-list/empty-list.component';

import useOwnerStore from '../../../app/useOwnerStore';

import { styles } from './play-list.styles';
import { NonInteractToyButton } from '../../../components/pressable-button/non-interact-toy-button.component';

export const PlayList = ({ id }) => {
    const { toys } = useOwnerStore(state => state.inventory);

    return (
        <View style={styles.container}>
            {!toys.every(item => item.count === 0) ? (
                toys.map((item, index) => (
                    <Fragment key={item.id}>
                        <NonInteractToyButton
                            catId={id}
                            item={item}
                            index={index}
                        />
                    </Fragment>
                ))
            ) : (
                <EmptyList text="You do not have any toys. Buy some toys!" />
            )}
        </View>
    );
};
