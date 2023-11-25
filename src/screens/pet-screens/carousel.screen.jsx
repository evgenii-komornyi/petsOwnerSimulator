import React, { useEffect } from 'react';
import { View } from 'react-native';

import { useOnBackPress } from '../../hooks/common/useOnBackPress.hook';

import useShelterStore from '../../app/useShelterStore';

import { Carousel } from '../../components/carousel/carousel.component';

import { Loader } from '../../components/loader/loader.component';

import { loaders } from '../../data/loaders';

import { styles } from '../../styles/global.styles';

export const CarouselScreen = () => {
    useOnBackPress();
    const { isLoaded, loadShelter } = useShelterStore(state => state);

    useEffect(() => {
        loadShelter();
    }, []);

    return (
        <View style={styles.container}>
            {isLoaded ? <Carousel /> : <Loader sourceFile={loaders.loading} />}
        </View>
    );
};
