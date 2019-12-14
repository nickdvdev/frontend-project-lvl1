import { playGame, gameRounds, isPrimeGame } from '..';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  playGame(gameRounds, isPrimeGame);
};
