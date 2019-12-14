import { playGame, gameRounds, gameGcd } from '..';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  playGame(gameRounds, gameGcd);
};
