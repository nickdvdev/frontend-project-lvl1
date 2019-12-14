import { playGame, gameRounds, gameEven } from '..';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  playGame(gameRounds, gameEven);
};
