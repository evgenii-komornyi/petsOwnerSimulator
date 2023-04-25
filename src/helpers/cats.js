import { Constants } from '../constants/constants';

export const cats = [
    {
        id: 'cat-1',
        name: 'Coffee',
        img: {
            regular: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/coffee/coffee.png`,
            },
            sad: { uri: `${Constants.ASSETS_CATS_FOLDER}/coffee/sad.png` },
            sleeping: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/coffee/sleeping.png`,
            },
            dead: { uri: `${Constants.ASSETS_DEAD_FOLDER}/short_hair.png` },
        },
        bio: '',
        stats: {
            health: 100,
            hunger: 100,
            mood: 100,
            digestion: 30,
        },
        statsReducing: {
            health: 1,
            hunger: 1,
            mood: 1,
            digestion: 1,
        },
        statsIncreasing: {
            health: 1,
            hunger: 1,
            mood: {
                up: 5,
                down: 35,
                left: 5,
                right: 5,
                diagonal: 35,
            },
            digestion: 30,
        },
    },
    {
        id: 'cat-2',
        name: 'Donut',
        img: {
            regular: { uri: `${Constants.ASSETS_CATS_FOLDER}/donut/donut.png` },
            sad: { uri: `${Constants.ASSETS_CATS_FOLDER}/donut/sad.png` },
            sleeping: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/donut/sleeping.png`,
            },
            dead: { uri: `${Constants.ASSETS_DEAD_FOLDER}/long_hair.png` },
        },
        bio: '',
        stats: {
            health: 100,
            hunger: 100,
            mood: 100,
            digestion: 30,
        },
        statsReducing: {
            health: 1,
            hunger: 1,
            mood: 1,
            digestion: 1,
        },
        statsIncreasing: {
            health: 1,
            hunger: 1,
            mood: {
                up: 5,
                down: 35,
                left: 5,
                right: 5,
                diagonal: 35,
            },
            digestion: 30,
        },
    },
    {
        id: 'cat-3',
        name: 'Lucius',
        img: {
            regular: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/lucius/lucius.png`,
            },
            sad: { uri: `${Constants.ASSETS_CATS_FOLDER}/lucius/sad.png` },
            sleeping: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/lucius/sleeping.png`,
            },
            dead: { uri: `${Constants.ASSETS_DEAD_FOLDER}/long_hair.png` },
        },
        bio: '',
        stats: {
            health: 100,
            hunger: 100,
            mood: 100,
            digestion: 30,
        },
        statsReducing: {
            health: 1,
            hunger: 1,
            mood: 1,
            digestion: 1,
        },
        statsIncreasing: {
            health: 1,
            hunger: 1,
            mood: {
                up: 5,
                down: 35,
                left: 5,
                right: 5,
                diagonal: 35,
            },
            digestion: 30,
        },
    },
    {
        id: 'cat-4',
        name: 'Lucky',
        img: {
            regular: { uri: `${Constants.ASSETS_CATS_FOLDER}/lucky/lucky.png` },
            sad: { uri: `${Constants.ASSETS_CATS_FOLDER}/lucky/sad.png` },
            sleeping: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/lucky/sleeping.png`,
            },
            dead: { uri: `${Constants.ASSETS_DEAD_FOLDER}/short_hair.png` },
        },
        bio: '',
        stats: {
            health: 100,
            hunger: 100,
            mood: 100,
            digestion: 30,
        },
        statsReducing: {
            health: 1,
            hunger: 1,
            mood: 1,
            digestion: 1,
        },
        statsIncreasing: {
            health: 1,
            hunger: 1,
            mood: {
                up: 5,
                down: 35,
                left: 5,
                right: 5,
                diagonal: 35,
            },
            digestion: 30,
        },
    },
    {
        id: 'cat-5',
        name: 'Meesha',
        img: {
            regular: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/meesha/meesha.png`,
            },
            sad: { uri: `${Constants.ASSETS_CATS_FOLDER}/meesha/sad.png` },
            sleeping: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/meesha/sleeping.png`,
            },
            dead: { uri: `${Constants.ASSETS_DEAD_FOLDER}/short_hair.png` },
        },
        bio: '',
        stats: {
            health: 100,
            hunger: 100,
            mood: 100,
            digestion: 30,
        },
        statsReducing: {
            health: 1,
            hunger: 1,
            mood: 1,
            digestion: 1,
        },
        statsIncreasing: {
            health: 1,
            hunger: 1,
            mood: {
                up: 5,
                down: 35,
                left: 5,
                right: 5,
                diagonal: 35,
            },
            digestion: 30,
        },
    },
    {
        id: 'cat-6',
        name: 'Muffin',
        img: {
            regular: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/muffin/muffin.png`,
            },
            sad: { uri: `${Constants.ASSETS_CATS_FOLDER}/muffin/sad.png` },
            sleeping: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/muffin/sleeping.png`,
            },
            dead: { uri: `${Constants.ASSETS_DEAD_FOLDER}/short_hair.png` },
        },
        bio: '',
        stats: {
            health: 100,
            hunger: 100,
            mood: 100,
            digestion: 30,
        },
        statsReducing: {
            health: 1,
            hunger: 1,
            mood: 1,
            digestion: 1,
        },
        statsIncreasing: {
            health: 1,
            hunger: 1,
            mood: {
                up: 5,
                down: 35,
                left: 5,
                right: 5,
                diagonal: 35,
            },
            digestion: 30,
        },
    },
    {
        id: 'cat-7',
        name: 'Owl',
        img: {
            regular: { uri: `${Constants.ASSETS_CATS_FOLDER}/owl/owl.png` },
            sad: { uri: `${Constants.ASSETS_CATS_FOLDER}/owl/sad.png` },
            sleeping: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/owl/sleeping.png`,
            },
            dead: { uri: `${Constants.ASSETS_DEAD_FOLDER}/folded_ears.png` },
        },
        bio: '',
        stats: {
            health: 100,
            hunger: 100,
            mood: 100,
            digestion: 30,
        },
        statsReducing: {
            health: 1,
            hunger: 1,
            mood: 1,
            digestion: 1,
        },
        statsIncreasing: {
            health: 1,
            hunger: 1,
            mood: {
                up: 5,
                down: 35,
                left: 5,
                right: 5,
                diagonal: 35,
            },
            digestion: 30,
        },
    },
    {
        id: 'cat-8',
        name: 'Picasso',
        img: {
            regular: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/picasso/picasso.png`,
            },
            sad: { uri: `${Constants.ASSETS_CATS_FOLDER}/picasso/sad.png` },
            sleeping: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/picasso/sleeping.png`,
            },
            dead: { uri: `${Constants.ASSETS_DEAD_FOLDER}/short_hair.png` },
        },
        bio: '',
        stats: {
            health: 100,
            hunger: 100,
            mood: 100,
            digestion: 30,
        },
        statsReducing: {
            health: 1,
            hunger: 1,
            mood: 5,
            digestion: 1,
        },
        statsIncreasing: {
            health: 1,
            hunger: 1,
            mood: {
                up: 5,
                down: 35,
                left: 5,
                right: 5,
                diagonal: 35,
            },
            digestion: 30,
        },
    },
    {
        id: 'cat-9',
        name: 'Qwerty',
        img: {
            regular: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/qwerty/qwerty.png`,
            },
            sad: { uri: `${Constants.ASSETS_CATS_FOLDER}/qwerty/sad.png` },
            sleeping: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/qwerty/sleeping.png`,
            },
            dead: { uri: `${Constants.ASSETS_DEAD_FOLDER}/short_hair.png` },
        },
        bio: '',
        stats: {
            health: 100,
            hunger: 100,
            mood: 100,
            digestion: 30,
        },
        statsReducing: {
            health: 1,
            hunger: 1,
            mood: 1,
            digestion: 1,
        },
        statsIncreasing: {
            health: 1,
            hunger: 1,
            mood: {
                up: 5,
                down: 35,
                left: 5,
                right: 5,
                diagonal: 35,
            },
            digestion: 30,
        },
    },
    {
        id: 'cat-10',
        name: 'Sammy',
        img: {
            regular: { uri: `${Constants.ASSETS_CATS_FOLDER}/sammy/sammy.png` },
            sad: { uri: `${Constants.ASSETS_CATS_FOLDER}/sammy/sad.png` },
            sleeping: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/sammy/sleeping.png`,
            },
            dead: { uri: `${Constants.ASSETS_DEAD_FOLDER}/long_hair.png` },
        },
        bio: '',
        stats: {
            health: 100,
            hunger: 100,
            mood: 100,
            digestion: 30,
        },
        statsReducing: {
            health: 1,
            hunger: 1,
            mood: 1,
            digestion: 1,
        },
        statsIncreasing: {
            health: 1,
            hunger: 1,
            mood: {
                up: 5,
                down: 35,
                left: 5,
                right: 5,
                diagonal: 35,
            },
            digestion: 30,
        },
    },
    {
        id: 'cat-11',
        name: 'Trickster',
        img: {
            regular: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/trickster/trickster.png`,
            },
            sad: { uri: `${Constants.ASSETS_CATS_FOLDER}/trickster/sad.png` },
            sleeping: {
                uri: `${Constants.ASSETS_CATS_FOLDER}/trickster/sleeping.png`,
            },
            dead: { uri: `${Constants.ASSETS_DEAD_FOLDER}/short_hair.png` },
        },
        bio: '',
        stats: {
            health: 100,
            hunger: 100,
            mood: 100,
            digestion: 30,
        },
        statsReducing: {
            health: 1,
            hunger: 1,
            mood: 1,
            digestion: 1,
        },
        statsIncreasing: {
            health: 1,
            hunger: 1,
            mood: {
                up: 5,
                down: 35,
                left: 5,
                right: 5,
                diagonal: 35,
            },
            digestion: 30,
        },
    },
];
