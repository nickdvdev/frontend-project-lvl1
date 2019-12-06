import {
  welcome, gameRounds, playGame, gameCalc,
} from '../..';

export default () => {
  welcome();
  console.log('What is the result of the expression?');
  playGame(gameRounds, gameCalc);
};
