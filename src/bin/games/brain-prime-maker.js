import {
  welcome, gameRounds, playGame,
  isPrimeGame,
} from '../..';

export default () => {
  welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  playGame(gameRounds, isPrimeGame);
};
