import { playGame, gameRounds, arithProgGame } from '..';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?\n');
  playGame(gameRounds, arithProgGame);
};
