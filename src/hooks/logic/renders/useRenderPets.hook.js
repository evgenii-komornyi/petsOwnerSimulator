import { FlatList } from 'react-native';
import { NoPets } from '../../../components/pets/no-pets.component';
import { GameOver } from '../../../components/pets/game-over.component';
import { GameOverWithoutUsingAvailablePets } from '../../../components/pets/game-over-without-using-available-pets.component.jsx';
import { Pet } from '../../../components/pets/pet.component';

import useOwnerStore from '../../../app/useOwnerStore.js';

import { usePets } from '../pets/usePets.hook';

import { Constants } from '../../../constants/constants';

import { styles } from '../../../components/pets/pets.styles';

export const useRenderPets = () => {
    const { pets } = useOwnerStore(state => state);
    const { flatListRef, handleTouchStart, handleTouchEnd } = usePets(pets);

    const renderPetsComponent = () => {
        if (pets.length === 0) {
            return <NoPets />;
        } else if (pets.length !== 0 && pets.every(pet => pet.wasTaken)) {
            return pets.length === Constants.MAX_AVAILABLE_PETS ? (
                <GameOver />
            ) : (
                <GameOverWithoutUsingAvailablePets />
            );
        } else {
            return (
                <FlatList
                    ref={flatListRef}
                    data={pets.filter(pet => !pet.wasTaken)}
                    renderItem={({ item, index }) => (
                        <Pet
                            petIdx={index}
                            item={item}
                            touchStart={handleTouchStart}
                            touchEnd={handleTouchEnd}
                        />
                    )}
                    keyExtractor={(_, index) => index}
                    key={item => item.id}
                    numColumns={1}
                    contentContainerStyle={styles.contentContainer}
                />
            );
        }
    };

    return { renderPetsComponent };
};
