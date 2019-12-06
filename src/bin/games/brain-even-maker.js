import {
  welcome, playGame, gameRounds, gameEven,
} from '../..';

export default () => {
  welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  playGame(gameRounds, gameEven);
};
