import React from 'react';
import { View } from 'react-native';

import { EmptyList } from '../../../components/empty-list/empty-list.component';

import useOwnerStore from '../../../app/useOwnerStore';

import { useRenderToys } from '../../../hooks/logic/renders/useRenderToys.hook';

import { styles } from './play-list.styles';

export const PlayList = ({ petId }) => {
    const { toys } = useOwnerStore(state => state.inventory);
    const { renderToysComponent } = useRenderToys(toys);

    return (
        <View style={styles.container}>
            {toys.length > 0 ? (
                renderToysComponent(petId)
            ) : (
                <EmptyList text="You do not have any toys. Buy some toys!" />
            )}
        </View>
    );
};
