import {
  welcome, playGame, gameGcd, gameRounds,
} from '../..';

export default () => {
  welcome();
  console.log('Find the greatest common divisor of given numbers.');
  playGame(gameRounds, gameGcd);
};
