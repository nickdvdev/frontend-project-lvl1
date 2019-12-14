import { playGame, gameRounds, gameCalc } from '..';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  playGame(gameRounds, gameCalc);
};
