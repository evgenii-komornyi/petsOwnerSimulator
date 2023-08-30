import { NativeModules } from 'react-native';

const { Game } = NativeModules;

export const loadGame = async saveMoment => {
    let data = null;

    try {
        data = await Game.loadGame({ saveMoment });
    } catch (error) {
        console.log(error);
    }

    return data;
};

export const saveGame = () => {
    Game.saveGame();
};
