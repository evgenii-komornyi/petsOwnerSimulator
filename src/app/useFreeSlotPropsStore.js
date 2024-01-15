import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { getRandom } from '../helpers/random.helper';

const availablePlaces = [
    {
        id: 0,
        petPlace: 'curledCatOnSofa',
        petPosition: 'curledUp',
        isFree: true,
    },
    {
        id: 1,
        petPlace: 'curledCatOnCatHouse',
        petPosition: 'curledUp',
        isFree: true,
    },
    {
        id: 2,
        petPlace: 'sausageCatOnWindowSill',
        petPosition: 'sausage',
        isFree: true,
    },
];

const freeSlotPropsStore = set => ({
    randomPlaces: [],

    generateRandomPetsPosition: pets => {
        if (pets.length > 0) {
            pets.filter(pet => !pet.wasTaken).forEach(_ => {
                const freePlaces = availablePlaces.filter(
                    place => place.isFree
                );
                const freePlace = freePlaces[getRandom(freePlaces.length)];

                set(state => ({
                    randomPlaces: [...state.randomPlaces, freePlace],
                }));
                const placeToOccupy = availablePlaces.find(
                    place => place.id === freePlace.id
                );
                placeToOccupy.isFree = false;
            });
        }
    },
});

const useFreeSlotPropsStore = create(devtools(freeSlotPropsStore));

export default useFreeSlotPropsStore;
