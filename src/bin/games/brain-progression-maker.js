import {
  welcome, playGame, gameRounds,
  arithProgGame,
} from '../..';

export default () => {
  welcome();
  console.log('What number is missing in the progression?\n');
  playGame(gameRounds, arithProgGame);
};
