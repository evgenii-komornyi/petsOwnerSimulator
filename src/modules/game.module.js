import { NativeModules } from 'react-native';
import { apiHandler } from '../helpers/api.helper';

const { Game } = NativeModules;

export const loadGame = async saveMoment =>
    apiHandler(Game.loadGame, { saveMoment });

export const resetGame = () => {
    Game.resetGame();
};

export const saveGame = () => {
    Game.saveGame();
};
