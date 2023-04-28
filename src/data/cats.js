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
        bio: 'Coffee was born in a small café from a stray mother, who came there for food and shelter. Luckily owners of the café were very helpful. From the first days when  Coffee started to walk, it was clear that it’s a special kitty.  Coffee has a so known wobbly cat syndrome – lack of the movement coordination that results in always looking a bit “drunk”. The café owners spent a lot of time and money trying to help the kitten, but some things just cannot be fixed. But Coffee doesn’t care about this condition and doesn’t feel being different. It’s a happy playful cat, that requires just a little bit more attention than the others. ',
        stats: {
            health: 1,
            hunger: 1,
            mood: 1,
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
        wasTaken: false,
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
        bio: 'Donut was sold as a purebred sphynx without documents. It didn’t take long for the hair to grow and for the new owners to realize they wasted their money on something they didn’t want. For several days Donut was sitting under the balcony meowing to get family’s attention and couldn’t understand, why it is not possible to come back home from this scary place. After that someone, who saw the whole story, brough Donut to the animal shelter. Donut is selective about the food and has a behavior of a noble cat: never would throw an item from the table, never would steal any food from the human’s plate or dumpster, never would go into the dirty litter box.',
        stats: {
            health: 2,
            hunger: 2,
            mood: 1,
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
        wasTaken: false,
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
        bio: 'Lucius was caught by the volunteers for the sterilization. Normally, cats are brought back to the colony after they recover, but Lucius was absolutely deaf, and volunteers decided, it is risky to let such a kitten live in the streets. Being deaf is quite usual for the white cats with the blue eyes. Lucius doesn’t react to any human critics, can sleep even in the middle of the apocalypse and isn’t afraid of the vacuum cleaner. But somehow Lucius always knows when the canned cat food is opened.',
        stats: {
            health: 3,
            hunger: 3,
            mood: 3,
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
        wasTaken: false,
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
        bio: 'Lucky suddenly appeared in front of a car in the middle of a forest road. Far away from the civilization, completely alone. The driver, who found this ball of black fur, took a long walk around the place, but hasn’t noticed any house or a stray cat family. Just an opened backpack, that smelled of cat piss. Lucky was smelly too and covered in pine needles. The kitten hopped into the car without invitation, and sat in the front seat, periodically turning his head to check, if savior is still around. Lucky indeed.',
        stats: {
            health: 1,
            hunger: 1,
            mood: 1,
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
        wasTaken: false,
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
        bio: 'Meesha was born in the summer house from a cat that children fed in their garden. Real stray kitten, who hissed at the humans and run away if someone tried to come closer. Nevertheless, Meesha knew every house, where people gladly shared their food with the homeless kittens, and always checked them all, living the best life. But happy summer ended with the autumn coming. People started to leave to the city. The village became empty. And it was scary. Much scarier than trying to befriend a human and Meesha came to the door of one of the last families still being here, meowing and asking to let in.',
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
        wasTaken: false,
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
        bio: 'Owners refused to neuter their cat, as, according to them, it is not natural and is also bad for her health, so she periodically gives birth. After that the owners have drown the kittens. This time mother found a good place to hide her only child, so the little one was only found after its’ eyes opened. Kitten was packed into a box and thrown into the nearest shelter’s territory. Shelter workers called the kitten Muffin.',
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
        wasTaken: false,
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
        bio: 'Owl is a purebred Scottish fold – a beautiful silver chinchilla with turquoise eyes and small ears. Almost whole life Owl spent in a dirty rusted cage in a kitten mill, producing dozens of offsprings. Fortunately, this place was found by the volunteers, who called the police and all the cats were taken to the vet and into a better shelter. Owl has weak paws with illegally removed nails, some chronic stomach disease and is not used to being a pet. Therefore, most of the time Owls spends lying on the windowsill looking at the sky, trees and birds. And sometimes even allows humans to stand nearby.',
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
        wasTaken: false,
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
        bio: 'For many years Picasso used to be the companion of the old lady. Quite home without any children or other animals, where Picasso spent the days sleeping, looking through the window and purring to the bellowed human. And always getting the most delicious pieces of food right from the table. Unfortunately, sometimes owners pass away earlier than their pets. Right now, Picasso is stressed and confused. Not old yet but losing the “cuteness contest” to the kittens and having troubles to adapt to the new home quickly.',
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
        wasTaken: false,
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
        bio: 'Shelter employees sometimes say Qwerty is cursed. Qwerty was first adopted as a little kitten, but even a month hasn’t passed, until the owners came back and said they appeared to be allergic to cats. It wasn’t long until new home was found, but just a few weeks later Qwerty was returned to the shelter after breaking very expensive vase. Third family kept Qwerty for almost a year, but then they decided to move to another country and claimed it wouldn’t be possible to take the cat there. Qwerty doesn’t lose hope to get adopted forever, purring and offering to pet the belly to everybody, who is coming to the shelter.',
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
        wasTaken: false,
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
        bio: 'Some adult noticed a screaming and hissing box in the hands of a group of the children. One of them said, there is a kitten inside, and mom doesn’t allow to keep it because of the allergies. The adult asked, if it would be then possible to get the kitten. At first children declined the offer, claiming they were planning to build a house for the cat in the basement, but then agreed to exchange it for some money to buy ice-cream. “It’s not very friendly” – they warned handing the box to the new owner – “It scratches and bites”. At the adult’s home kitten was sitting under the couch for almost a week. Sammy is still afraid of loud noises and children, but otherwise it’s one of the loveliest cats in the universe.',
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
        wasTaken: false,
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
        bio: 'Trickster is the sole survivor from the litter of kittens thrown into a dumpster in a closed box. Someone ensured, they wouldn’t make it out alive, securing the box with enormous amount of sticky tape. But Trickster was loud enough to be heard by a passing by human. Hungry, dehydrated and ill, Trickster was brought to the veterinary clinic. One eye lost the fight to the virus, the other one is left with impaired vision. But guess what – Trickster hasn’t lost faith in humanity. It’s a joyful and loving kitty ready to sleep on the lap of the human buddy forever. With just the small breaks for fun and food, of course.',
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
        wasTaken: false,
    },
];
