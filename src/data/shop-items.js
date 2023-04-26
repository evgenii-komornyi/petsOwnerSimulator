import { Constants } from '../constants/constants';

export const shopItems = [
    {
        title: 'Food',
        items: [
            {
                id: 'chicken-10k',
                name: 'chicken',
                type: 'food',
                forAnimal: 'cat',
                image: {
                    new: { uri: `${Constants.ASSETS_FOOD_FOLDER}/chicken.png` },
                },
                satisfaction: 20,
                cost: 5,
            },
        ],
    },
    {
        title: 'Toys',
        items: [],
    },
    {
        title: 'Litter Boxes',
        items: [
            {
                id: 'lb-1000',
                slots: 4,
                name: 'LB-1000',
                type: 'litterBox',
                image: {
                    new: {
                        uri: `${Constants.ASSETS_LITTER_BOXES_FOLDER}/lb-1000/new.png`,
                    },
                    empty: {
                        uri: `${Constants.ASSETS_LITTER_BOXES_FOLDER}/lb-1000/empty.png`,
                    },
                    used: {
                        uri: `${Constants.ASSETS_LITTER_BOXES_FOLDER}/lb-1000/used.png`,
                    },
                    full: {
                        uri: `${Constants.ASSETS_LITTER_BOXES_FOLDER}/lb-1000/full.png`,
                    },
                },
                cost: 20,
            },
        ],
    },
    {
        title: 'Houses',
        items: [
            {
                id: 'ch-9000',
                name: 'CH-9000',
                type: 'catHouse',
                image: {
                    new: {
                        uri: `${Constants.ASSETS_HOUSES_FOLDER}/ch-9000/ch-9000.png`,
                    },
                },
                cost: 20,
            },
        ],
    },
];
